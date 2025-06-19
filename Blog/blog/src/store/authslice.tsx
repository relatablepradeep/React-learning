import { createSlice } from "@reduxjs/toolkit";


interface AuthState {
    isAuthenticated: boolean;
    userData: any | null; 
}

// Set the initial state
const initialState: AuthState = {
    isAuthenticated: false, // User is initially not authenticated
    userData: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userData = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
