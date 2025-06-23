import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
    },

    Logout: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, Logout } = authSlice.actions;

export default authSlice.reducer;

export const selectIsAuthenticated = (state) => !!state.auth.token;
