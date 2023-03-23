import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice";
import basketSlice from "./slices/basketSlice";
import loaderSlice  from "./slices/loaderSlice"
import postDataForm from "./slices/postDataForm";

const store = configureStore({
    reducer: {
        loader: loaderSlice,
        postFormData: postDataForm,
        basket: basketSlice,
        login: authSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;