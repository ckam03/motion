import { KeyboardEvent, useEffect, useState } from "react";

interface ITodoForm {
  createTodo: addTodo;
}
const TodoForm: React.FC<ITodoForm> = ({ createTodo }) => {
  const [todo, setTodo] = useState<string>("")

  const onSubmit = (event: KeyboardEvent) => {
    
    if(event.key === "Enter") {
      createTodo(todo)
      setTodo("")
      //console.log(todo)
    }
  }
  return (
    <div className="flex items-center space-x-1"> 
        <input
          type="text"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value)}
          }
          onKeyDown={onSubmit}
          className="font-Inter p-2 rounded-lg w-full h-9 flex justify-center items-center border-none bg-gray-100 dark:bg-gray-500 dark:placeholder-gray-200 focus:ring-2 focus:border-blue-500 ease-in-out duration-100 shadow-lg"
          placeholder="Add New Todo"
        />
        <button className="p-1 rounded-lg h-9 flex justify-center items-center border-2 bg-gray-50 dark:bg-gray-500 border-gray-100 dark:border-gray-600 ease-in-out duration-100 hover:bg-blue-500 hover:text-blue-50 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      
    </div>
  );
};
export default TodoForm;
