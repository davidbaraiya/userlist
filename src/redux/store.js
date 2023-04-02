import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./feature/userSlice";

const store = configureStore({
  reducer: {
    userData: UserReducer,
  },
});

export default store;
