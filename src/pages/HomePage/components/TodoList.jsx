import Badge from "components/common/Badge";
import { deleteTodo } from "features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { HiPencil } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import CATEGORY_OPTIONS from "../constants/CATEGORY_OPTIONS";
import TodoForm from "./TodoForm";
import Popup from "components/Popup";

const TodoList = () => {
  const { todoList } = useSelector((state) => state).todoReducer;
  const dispatch = useDispatch();
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleDelete = (id) => dispatch(deleteTodo({ id }));
  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setIsPopupOpen(true);
  };
  const filteredList = todoList
    ?.filter((todo) =>
      filterCategory === "all"
        ? true
        : todo?.category?.toLowerCase() === filterCategory
    )
    ?.sort((a, b) => {
      const timeA = new Date(a.timeCreated).getTime();
      const timeB = new Date(b.timeCreated).getTime();
      return sortAsc ? timeA - timeB : timeB - timeA;
    });
  return (
    <div className="p-6 bg-gray-50 min-h-screen rounded-md">
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <TodoForm
          isEditing={isEditing}
          setIsPopupOpen={setIsPopupOpen}
          initialValues={currentTodo}
        />
      </Popup>
      <div className="flex items-start justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          My Todo List
        </h2>
        <IoAddCircleOutline
          onClick={() => {
            setIsPopupOpen(true);
            setIsEditing(false);
          }}
          className="cursor-pointer"
          size={30}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <label className="text-gray-700 font-medium">Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-1 border rounded-md text-sm bg-white shadow-sm focus:outline-none"
          >
            {CATEGORY_OPTIONS?.map((category) => (
              <option key={category} value={category}>
                {category === "all"
                  ? "All Categories"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setSortAsc((prev) => !prev)}
          className="flex items-center justify-between bg-[#278695] text-white px-2 py-1 rounded hover:bg-[#569aa5] cursor-pointer select-none w-32 transition-all"
        >
          {sortAsc ? (
            <FiArrowUp className="text-lg" />
          ) : (
            <FiArrowDown className="text-lg" />
          )}
          {sortAsc ? "Oldest First" : "Newest First"}
        </button>
      </div>
      {filteredList?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredList?.map((todo) => (
            <div
              key={todo?.id}
              className="bg-white p-3 rounded-2xl shadow hover:shadow-lg transition-shadow relative min-h-60 flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">
                  {todo?.title}
                </h3>
                <div className="flex gap-2">
                  <HiPencil
                    size={20}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer transition-all"
                    onClick={() => handleEdit(todo)}
                  />
                  <FaRegTrashAlt
                    size={18}
                    className="text-red-500 hover:text-red-700 cursor-pointer transition-all"
                    onClick={() => handleDelete(todo?.id)}
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-2 flex-grow">{todo?.content}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <Badge category={todo?.category}>{todo?.category}</Badge>
                <Badge isDate>{todo?.timeCreated}</Badge>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    todo?.done
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-500"
                  }`}
                >
                  {todo?.done ? "Done" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center">
          <p className="text-2xl font-bold">Empty Todo List!</p>
        </div>
      )}
    </div>
  );
};
export default TodoList;
