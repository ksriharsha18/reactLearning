import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            const cartProdIndex = {}
            state.items.map((cart,index,array) => {
                if(cartProdIndex[cart.id] === undefined) {
                    cartProdIndex[cart.id] = index
                } else {
                    cartProdIndex[cart.id] = index
                }
            })
            state.items.splice((cartProdIndex[action.payload.id]), 1)
        },
        clearCart: (state, action) => {
            state.items = []
        },
        removeLineItem: (state, action) => {
            state.items = state.items.filter((arr) => {
                return arr.id !== action.payload.id
            })
        }
    }
})

export const {addItem, removeItem, clearCart, removeLineItem} = cartSlice.actions

export default cartSlice.reducer
