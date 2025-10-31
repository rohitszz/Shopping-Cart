import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { wishlistSlice } from "./Slices/WishlistSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        wishlist:wishlistSlice.reducer,
    }
})
