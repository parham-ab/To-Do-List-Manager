import { addTodo } from "features/todo/todoSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(addTodo(title, content, done, category));

    // Optionally reset the form
    setTitle("");
    setContent("");
    setDone(false);
    setCategory("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border rounded shadow max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Add Todo</h2>

      <div className="mb-3">
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="mb-3">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
            className="mr-2"
          />
          Done
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
