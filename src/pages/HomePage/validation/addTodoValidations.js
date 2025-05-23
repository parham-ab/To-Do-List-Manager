import * as Yup from "yup";
const addTodoDefaultValues = {
  title: "",
  content: "",
  category: "",
  done: false,
};

const categoryOptions = [
  { value: "", label: "Select a category" },
  { value: "sport", label: "Sport" },
  { value: "work", label: "Work" },
  { value: "personal", label: "Personal" },
  { value: "study", label: "Study" },
  { value: "shop", label: "Shop" },
];

const addTodoValidationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required!")
    .max(15, "Title must be at most 15 characters"),
  content: Yup.string(),
  category: Yup.string()
    .required("Category is required!")
    .min(3, "Category must be at least 3 characters"),
  done: Yup.boolean()
    .oneOf([true, false], "Done status must be true or false")
    .notRequired(),
});

export { addTodoValidationSchema, addTodoDefaultValues, categoryOptions };
