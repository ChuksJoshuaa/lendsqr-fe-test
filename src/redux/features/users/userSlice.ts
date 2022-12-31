import { createSlice } from "@reduxjs/toolkit";
import { IProps } from "../../../utils/types";

const initialState: IProps = {
  isSidebarOpen: false,
  allUsers: [],
};

export const userSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },

    storeUser: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { openSidebar, storeUser } = userSlice.actions;

export default userSlice.reducer;
