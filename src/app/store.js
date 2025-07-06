import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { userApi } from '../services/userService';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
