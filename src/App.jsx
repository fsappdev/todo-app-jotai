import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
