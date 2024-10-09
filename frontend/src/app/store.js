import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'

//configure your slice and how its used in code
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
