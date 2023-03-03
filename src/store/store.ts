import { configureStore } from "@reduxjs/toolkit"
import loaderSlice  from "./slices/loaderSlice"
import postDataForm from "./slices/postDataForm";

const store = configureStore({
    reducer: {
        loader: loaderSlice,
        postFormData: postDataForm
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;