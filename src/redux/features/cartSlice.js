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
            const IteamIndex = state.carts.findIndex(iteam =>iteam.id === action.payload.id);

            if(IteamIndex >= 0){
                state.carts[IteamIndex].qnty +=1;
            }else {
                const temp = {...action.payload, qnty:1}
                state.carts = [...state.carts, temp]
            }
            
        },
        //remove product
        removeToCart: (state, action) => {
            const data = state.carts.filter(element => element.id !== action.payload);
            state.carts = data
        },
        removeSingleItems: (state, action) => {
            const IteamIndex_dec = state.carts.findIndex(item => item.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >= 1){
                state.carts[IteamIndex_dec].qnty -= 1
            }
        },
        emptyCart:(state,action)=>{
            state.carts = []
        }
    }
});

export const { addToCart, removeToCart, removeSingleItems, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;