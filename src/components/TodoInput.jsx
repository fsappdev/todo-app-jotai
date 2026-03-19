import { useAtom } from "jotai";
import { todosAtom } from "../atoms";
import { useState } from "react";

export default function TodoInput() {
    const [todos, setTodos] = useAtom(todosAtom);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text, done: false }]);
        setText("");
    };

    return (
        <div className="flex gap-2 mb-4">
            <input
                className="flex-1 border rounded px-2 py-1"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe una tarea..."
            />
            <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={addTodo}
            >
                Agregar
            </button>
        </div>
    );
}