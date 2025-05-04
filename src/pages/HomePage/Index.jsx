import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";

const HomePage = () => {
  const { todoList } = useSelector((state) => state).todoReducer;
  console.log(todoList);

  return (
    <div className="grid grid-cols-12 container px-4 mx-auto gap-3">
      <div className="col-span-12 md:col-span-6">
        <TodoForm />
      </div>
      <div className="col-span-12 md:col-span-6"></div>
    </div>
  );
};

export default HomePage;
