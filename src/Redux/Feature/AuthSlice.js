import { createSlice } from "@reduxjs/toolkit"
import { LoginUser } from "../Service/AuthService"

const initialState = {
    loading: true,
    res: '',
    error: '',
}

export const AuthSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers(builder) {
        builder.addCase(LoginUser.fulfilled, (state,action) => {
            if(action.payload){
                localStorage.setItem('users',JSON.stringify(action.payload.token))
                state.loading = false;
                state.error = '';
                state.res = action;
            }
        })
        builder.addCase(LoginUser.pending, (state,action) => {
            state.loading = true;
            state.error = '';
            state.res = '';
        })
        builder.addCase(LoginUser.rejected, (state,action) => {
            state.loading = false;
            state.error = action;
            state.res = action;
        })
    }
})

export default AuthSlice.reducer

