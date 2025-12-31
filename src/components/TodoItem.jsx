import { useAtom } from "jotai";
import { todosAtom } from "../atoms";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useAtom(todosAtom);

  const toggleDone = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeTodo = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      <span
        onClick={toggleDone}
        className={`cursor-pointer ${todo.done ? "line-through text-gray-500" : ""}`}
      >
        {todo.text}
      </span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={removeTodo}
      >
        ✕
      </button>
    </div>
  );
}