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
        postSucceeded: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        postFailed: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {postRequested,postSucceeded,postFailed} = postFormDataSlice.actions
export default postFormDataSlice.reducer