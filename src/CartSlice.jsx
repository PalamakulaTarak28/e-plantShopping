import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // other reducers...
  },
});

export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;
