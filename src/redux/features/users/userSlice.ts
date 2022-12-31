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

    getData: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { openSidebar, getData } = userSlice.actions;

export default userSlice.reducer;
