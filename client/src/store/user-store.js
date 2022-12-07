import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const userActions = userSlice.actions;
export default store;
