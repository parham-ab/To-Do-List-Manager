import { createSlice } from "@reduxjs/toolkit";

const savedTheme = JSON.parse(localStorage.getItem("todo-management-app-them"));

const initialState = {
  theme: savedTheme || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    reducers: {
      toggleDarkMode: (state, { payload }) => {
        state.theme = payload;
        localStorage.setItem(
          "todo-management-app-them",
          JSON.stringify(state.theme)
        );
      },
    },
  },
});

export default themeSlice.reducer;
export const { lightMode, darkMode } = themeSlice.actions;
