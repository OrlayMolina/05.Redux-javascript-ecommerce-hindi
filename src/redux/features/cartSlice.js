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
            const IteamIndex = state.carts.findIndex((iteam) =>iteam.id === action.payload.id);

            if(IteamIndex >= 0){
                state.carts[IteamIndex].qnty +=1;
            }else {
                const temp = {...action.payload, qnty:1}
                state.carts = [...state.carts, temp]
            }
            
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;