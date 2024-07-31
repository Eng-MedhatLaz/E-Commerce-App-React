import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleClose(state) {
      state.isOpen = false;
    },
    handleToggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleClose, handleToggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
