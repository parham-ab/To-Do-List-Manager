import { addTodo } from "features/todo/todoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "components/common/CustomInput";
import {
  addTodoDefaultValues,
  addTodoValidationSchema,
} from "../validation/addTodoValidations";

const TodoForm = () => {
  const { theme } = useSelector((state) => state?.themeReducer);
  const dispatch = useDispatch();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(addTodoValidationSchema),
    defaultValues: addTodoDefaultValues,
  });

  const onSubmit = (data) => {
    if (!data.title.trim()) return;
    dispatch(addTodo(data.title, data.content, data.done, data.category));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`p-4 border ${
        theme === "dark" ? "border-white" : ""
      } rounded shadow-md max-w-md mx-auto`}
    >
      <h2
        className={`text-xl font-semibold mb-4 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Add Todo
      </h2>

      <div className="mb-3">
        <CustomInput
          control={control}
          name="title"
          label="Title"
          placeholder="Enter todo title"
          className="border-[#4B4B4B]"
          rules={{ required: "Title is required" }}
        />
      </div>

      <div className="mb-3">
        <CustomInput
          control={control}
          name="content"
          label="Content"
          type="textarea"
          placeholder="Enter todo content"
          className="border-[#4B4B4B]"
        />
      </div>

      <div className="mb-3">
        <CustomInput
          control={control}
          name="category"
          label="Category"
          placeholder="Enter category"
          className="border-[#4B4B4B]"
        />
      </div>

      <div className="mb-3">
        <label
          className={`inline-flex items-center cursor-pointer select-none ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <input
            type="checkbox"
            {...control.register("done")}
            className="mr-2"
          />
          Done
        </label>
      </div>

      <button
        type="submit"
        className="bg-[#278695] text-white px-4 py-2 rounded hover:bg-[#569aa5] cursor-pointer select-none w-full transition-all"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
