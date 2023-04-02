import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const USER_STORAGE_KEY = "userData";

// get localStorage data
const getStorageData = () => {
  const storeData = localStorage.getItem(USER_STORAGE_KEY);
  if (storeData) {
    return JSON.parse(storeData);
  } else {
    return [];
  }
};

// set data to localStorage
const setStorage = (userData) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
};

const userSlice = createSlice({
  name: "userData",
  initialState: {
    userData: getStorageData(),
    loading: false,
  },
  reducers: {
    createUser: (state, action) => {
      state.userData.push(action.payload);
      setStorage(state.userData);
    },
    updateUser: (state, action) => {
      const { name, email, phone, id } = action.payload;
      const existingUserIndex = state.userData.findIndex(
        (user) => user.id === id
      );
      if (existingUserIndex !== -1) {
        state.userData[existingUserIndex].name = name;
        state.userData[existingUserIndex].email = email;
        state.userData[existingUserIndex].phone = phone;
      }
      setStorage(state.userData);
    },

    deleteUser: (state, action) => {
      console.log(action.payload);
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload
      );
      setStorage(state.userData);
    },
  },
});

export const { createUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
