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
            } )
    },

})

//export the reset reducer that resets the state values
export const {reset} = authSlice.actions
//authSlice has a name of auth so its read as authReducer
export default authSlice.reducer