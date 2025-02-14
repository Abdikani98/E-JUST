import { configureStore } from "@reduxjs/toolkit";
import cart from "../reduce/cart"

const store = configureStore({
    reducer: {
        cart: cart,
    }
})
export default store