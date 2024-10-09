import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//Get user from local storage, extract the webtoken
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user? user: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message:'',
}

export const authSlice = createSlice({
    //name of reducer:
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
    extraReducers: () => {}

})

//export the reset reducer that resets the state values
export const {reset} = authSlice.actions
export default authSlice.reducer