import { createSlice } from "@reduxjs/toolkit"

const postFormDataSlice = createSlice({
    name: 'postFormData',
    initialState: {
        loading: false,
        error: null,
        data: null,
    },
    reducers: {
        postRequested: (state) => {
            state.loading = true;
        },
        postSucceeded: (state, {payload}) => {
            state.loading = false;
            state.data = payload;
        },
        postFailed: (state, {payload}) => {
            state.error = payload
        }
    }
})

export const {postRequested,postSucceeded,postFailed} = postFormDataSlice.actions
export default postFormDataSlice.reducer