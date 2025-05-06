import TodoList from "./components/TodoList";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 container px-4 mx-auto gap-3">
      <div className="col-span-12 mb-10">
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
