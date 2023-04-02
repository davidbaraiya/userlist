import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {
    userData: [],
    loading: false,
  },
  reducers: {
    createUser: (state, action) => {
      state.userData.push(action.payload);
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
    },

    deleteUser: (state, action) => {
      console.log(action.payload);
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload
        
      );
    },
  },
});

export const { createUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
