import { useState } from "react";

interface ITodoItem {
  todo: todo;
  toggleTodo: ToggleTodo;
}

const TodoItem: React.FC<ITodoItem> = ({ todo, toggleTodo }) => {
  const [expand, setExpand] = useState<boolean>(false)

  return (
    <div className={`${expand ? "h-28 duration-300 ease-in-out" : "h-10 duration-300 ease-in-out"} min-h-10 w-full p-2 border shadow-md rounded-lg flex items-center justify-between bg-gray-200 bg-opacity-50 font-Inter`}>
      <div className="flex items-center space-x-4">
        <li
          className={`${
            todo.isCompleted ? "line-through" : ""
          } flex items-center`}
        >
          <input
            type="checkbox"
            className="rounded mr-4"
            checked={todo.isCompleted}
            onClick={() => toggleTodo(todo)}
          />
          {todo.text}
        </li>
      </div>
      <div className="flex items-center space-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
      <svg
        onClick={() => setExpand(!expand)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <div>subtext</div>
      </div>
    </div>
  );
};

export default TodoItem;
