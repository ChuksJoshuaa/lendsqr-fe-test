import { createSlice } from "@reduxjs/toolkit";
import { IProps } from "../../../utils/types";

const initialState: IProps = {
  isSidebarOpen: false,
  allUsers: [],
  loginUsers: [],
  loading: true,
  showModal: false,
  error: false,
};

export const userSlice = createSlice({
  name: "users",

  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },

    storeUsers: (state, action) => {
      state.allUsers = action.payload;
    },

    saveUsers: (state, action) => {
      state.loginUsers = action.payload;
    },

    Loader: (state, action) => {
      state.loading = action.payload;
    },

    openModal: (state, action) => {
      state.showModal = action.payload;
    },

    showError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  openSidebar,
  storeUsers,
  Loader,
  saveUsers,
  openModal,
  showError,
} = userSlice.actions;

export default userSlice.reducer;
