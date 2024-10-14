import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

//Deal with asynchronus data, while communicating to the backend
//Get user from local storage, extract the webtoken which has a user field
const user = JSON.parse(localStorage.getItem('user'));
//Also account for the pending state, the fulfilled state, and rejected(if error)

const initialState = {
    //user contains : name, email, password and returns a JWT token for first session
    user: user? user: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message:'',
}

//FUNCTIONS:


//Register user. cAThunk- takes string ( + ) a function and uses the info given from 
//the register page to perform an action
export const register = createAsyncThunk(
    'auth/register',
    async (user,thunkAPI)=>{
        try {
            //Return payload from HTTP request.
            return await authService.register(user)
        } catch (error) {
            const message = 
            (error.response && error.response.data 
            && error.response.data.message)
            || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
 )
 //logout user
export const logout = createAsyncThunk('auth/logout',
    async()=> {
        await authService.logout()
    }
)
//login user
export const login = createAsyncThunk(
    'auth/login',
    async (user,thunkAPI)=>{
        try {
            //Return payload from HTTP request.
            return await authService.login(user)
        } catch (error) {
            const message = 
            (error.response && error.response.data 
            && error.response.data.message)
            || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
 )


export const authSlice = createSlice({
    //store reference authReducer when using in code
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) =>{
            state.isSuccess= false
            state.isError = false
            state.isLoading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //REGISTER
            .addCase(register.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action)=>{
                state.isLoading = false
                state.isSuccess = true
                //If register request is successful, assosicate the pay load
                //with the user currently in session.
                //Grab the jwt sent from the http request
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action)=>{
                state.isError = true
                state.isLoading = false
                //when registration function fails, set payload to message
                state.message = action.payload
                //something went wrong:
                state.user = null
            })//LOGOUT
            .addCase(logout.fulfilled, (state)=> {
                state.user = null
            })//LOGIN
            .addCase(login.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action)=> {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action )=> {
                state.isSuccess = false
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
    },

})

//export the reset reducer that resets the state values
export const {reset} = authSlice.actions
//authSlice has a name of auth so its read as authReducer
export default authSlice.reducer