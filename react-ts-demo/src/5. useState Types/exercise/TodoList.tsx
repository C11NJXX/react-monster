import { useState } from "react";

interface TodoShape {
  id: number;
  date: Date;
  content: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoShape[]>([
    { id: Math.random(), date: new Date(), content: "learn react-ts" },
    { id: Math.random(), date: new Date(), content: "Play basketball" },
  ]);
  const [todo, setTodo] = useState<TodoShape>();
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          const { id, date, content } = todo;
          return (
            <li key={id}>
              Today: {date.toLocaleString()} you need to {content}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder="Do something ?"
        value={todo?.content}
        onChange={(e) => {
          setTodo({
            id: Math.random(),
            date: new Date(),
            content: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          if (todo) {
            setTodos((prev) => [...prev, todo]);
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
