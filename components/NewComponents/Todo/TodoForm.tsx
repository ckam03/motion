import { useEffect, useState } from "react";

const TodoForm = () => {
    const [todo, setTodo] = useState<any>();
//   const AddTodo = (event: React.MouseEvent) => {
//     event.preventDefault();

//     useEffect(() => {
//       const postTodo = async () => {
//         const response = await fetch("/Todos", {
//             method: 'POST',

//         });
//         const result = await response.json();
        
//       };
//       return () => {
//           postTodo();
//       };
//     }, []);
//   };
  return (
    <div>
      <form className="flex items-center space-x-1">
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          className="font-Inter p-2 rounded-lg w-full h-9 flex justify-center items-center border-none bg-gray-200 bg-opacity-50 focus:ring-2 focus:border-blue-500 ease-in-out duration-100 shadow-lg"
          placeholder="Add New Todo"
        />
        <button
          
          className="p-1 rounded-lg h-9 flex justify-center items-center border-2 bg-gray-200 bg-opacity-40 ease-in-out duration-100 hover:bg-blue-500 hover:text-blue-50 shadow-lg"
        >
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
      </form>
    </div>
  );
};
export default TodoForm;
