import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
//Get user from local storage, extract the webtoken
const user = JSON.parse(localStorage.getItem('user'));

const InitialState = {
    user: user? user: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message:'',
}

