import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState:<any> {
        isEmpty: true,
        data:[],
    },
    reducers: {
        addToBasket: (state, {payload}) => {
            state.data = [...state.data, payload]
        },
        removeFromBasket: (state, {payload}) => {
            console.log(payload)
            state.data = state.data.filter(({id}) => id !== payload)
        }
    }
})
export const {addToBasket, removeFromBasket} = basketSlice.actions
export default basketSlice.reducer