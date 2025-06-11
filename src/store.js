import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // Adjust path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
