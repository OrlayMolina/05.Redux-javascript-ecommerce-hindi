import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        //add to cart
        addToCart: (state, action) => {

        }
    }
});

export const { addToCart } = createSlice.actions;

export default cartSlice.reducer;