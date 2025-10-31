import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addToWishlist:(state, action) => {
            state.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            return state.filter( item => item.id!== action.payload);
        },
        clearWishlist: (state) => {
            state.item = [];
        }
    }
})

export const {addToWishlist, removeFromWishlist, clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
