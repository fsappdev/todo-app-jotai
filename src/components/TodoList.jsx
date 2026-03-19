import { useAtom } from "jotai";
import { todosAtom } from "../atoms";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todos] = useAtom(todosAtom);

    return (
        <div>
            {todos.length === 0 ? (
                <p className="text-gray-500">No hay tareas aún.</p>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </div>
    );
}