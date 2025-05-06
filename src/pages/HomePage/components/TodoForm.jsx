import { addTodo } from "features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "components/common/CustomInput";
import {
  addTodoDefaultValues,
  addTodoValidationSchema,
  categoryOptions,
} from "../validation/addTodoValidations";

const TodoForm = ({ setIsPopupOpen, isEditing }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, reset, register } = useForm({
    resolver: yupResolver(addTodoValidationSchema),
    defaultValues: addTodoDefaultValues,
  });

  const onSubmit = (data) => {
    if (!data.title.trim()) return;
    dispatch(addTodo(data.title, data.content, data.done, data.category));
    setIsPopupOpen(false);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`rounded md:p-4 p-0 mx-auto`}
    >
      <p className="font-bold text-xl mb-5">
        {isEditing ? "Edit Todo" : "Add Todo"}
      </p>

      <CustomInput
        control={control}
        name="title"
        label="Title"
        placeholder="Enter todo title"
        className="border-[#4B4B4B]"
        rules={{ required: "Title is required" }}
      />

      <CustomInput
        control={control}
        name="content"
        label="Content"
        type="textarea"
        placeholder="Enter todo content"
        className="border-[#4B4B4B]"
      />

      <div className="mb-4">
        <label htmlFor="category" className={`block text-sm font-medium mb-1`}>
          Category
        </label>
        <select
          id="category"
          {...register("category")}
          className={`w-full p-2 border border-[#4B4B4B] rounded-md`}
        >
          {categoryOptions?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <label className={`inline-flex items-center cursor-pointer select-none`}>
        <input type="checkbox" {...control.register("done")} className="mr-2" />
        Done
      </label>

      <button
        type="submit"
        className="bg-[#278695] text-white px-4 py-2 rounded hover:bg-[#569aa5] cursor-pointer select-none w-full transition-all mt-5"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
