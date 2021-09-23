import { useState } from "react";

interface ITodoItem {
  todo: todo;
  toggleTodo: ToggleTodo;
}

const TodoItem: React.FC<ITodoItem> = ({ todo, toggleTodo }) => {
  const [expand, setExpand] = useState<boolean>(false)

  return (
    <div className={`p-2 border shadow-md rounded-lg bg-gray-100 font-Inter`}>
      <div className={`${expand ? "h-20 duration-300 ease-in-out" : "h-10 duration-300 ease-in-out"} h-14 flex flex-col`}>
      <div className="flex items-center justify-between">
         <li
           className={`${todo.isCompleted ? "line-through" : ""
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
         </div>
         <div className="flex justify-center items-center mt-1">
             Due:  
             <input type="date" className="h-8 rounded-lg w-48 ml-2" />
         </div>
      </div>
    </div>
  
  );
};

export default TodoItem;
