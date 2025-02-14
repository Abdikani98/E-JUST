import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: "cart",
    initialState: {
        cartItem: [],
        totalPrice: 0
    },

    reducers: {
        addToCart: (state, action) => {
            const newData = action.payload;
            state.cartItem.push(newData)
        },
        removeItem: (state, action) =>{
            const itemIndex = action.payload;
            state.cartItem = state.cartItem.filter((_, index) => index !== itemIndex)
        },
        calculatePrice: (state) =>{
            let price = 0;
            state.cartItem.forEach((item) => {
                price += item.price
            })

            state.totalPrice = price
        }
    }
})

export const {addToCart, removeItem, calculatePrice} = Cart.actions

export default Cart.reducer