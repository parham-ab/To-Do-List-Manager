import { createSlice } from "@reduxjs/toolkit";

const savedTheme = JSON.parse(
  localStorage.getItem("todo-management-app-theme")
);

const initialState = {
  theme: savedTheme || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      state.theme = payload;
      localStorage.setItem(
        "todo-management-app-theme",
        JSON.stringify(state.theme)
      );
    },
  },
});

export default themeSlice.reducer;
export const { toggleDarkMode } = themeSlice.actions;
