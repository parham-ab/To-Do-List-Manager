import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "features/todo/todoSlice";
import themeReducer from "features/utils/themeSlice";

export const store = configureStore({
  reducer: {
    todoReducer,
    themeReducer,
  },
});
