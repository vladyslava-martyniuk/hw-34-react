import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser } from "./usersOperations";
 const initialState = {
    user: null, 
    token: null,
    isLoggedIn: false
};
const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
 

extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
            state.isLoggedIn = true
        })
         builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.accessToken;
            state.isLoggedIn = true
        })
        builder.addCase(logOutUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload;
            state.isLoggedIn = false
        })
    },
});

export const userReducer = usersSlice.reducer;