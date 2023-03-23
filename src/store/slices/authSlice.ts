import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
    data: {},
    isLogin: boolean,
    isOpen: boolean
}
const authSlice = createSlice({
    name: 'auth',
    initialState:<LoginState> {
       data: {},
       isLogin: false,
       isOpen: false
    },
    reducers: {
        setLoginData:(state, action: PayloadAction<object>) => {
            state.data = action.payload;
            state.isLogin = true
        },
        login: state => {
            state.isOpen = true
        },
        closeLoginForm: state => {
            state.isOpen = false
        },
        logout: state => {
            state.isLogin = false
        }
    }
})

export const { setLoginData,login, logout,closeLoginForm} = authSlice.actions
export default authSlice.reducer