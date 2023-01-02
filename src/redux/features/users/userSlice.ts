import { createSlice } from "@reduxjs/toolkit";
import { IProps } from "../../../utils/types";

const initialState: IProps = {
  isSidebarOpen: false,
  allUsers: [],
  loginUsers: [],
  loading: true,
};

export const userSlice = createSlice({
  name: "counter",

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
  },
});

export const { openSidebar, storeUsers, Loader, saveUsers } = userSlice.actions;

export default userSlice.reducer;
