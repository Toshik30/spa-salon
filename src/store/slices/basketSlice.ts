import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState:<any> {
        isOpen: false,
        data:[],
    },
    reducers: {
        addToBasket: (state, {payload}) => {
            state.data =[...state.data, payload]
        },
        removeFromBasket: (state, {payload}) => {
            state.data = state.data.filter(({id}:any) => id !== payload)
        },
        basketMenu: (state, {payload}) => {
            state.isOpen = payload
        }
    }
})
export const {addToBasket, removeFromBasket, basketMenu} = basketSlice.actions
export default basketSlice.reducer