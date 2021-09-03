interface ITodoItem {
  todo: todo,
  //toggleTodo: ToggleTodo
}

const TodoItem:React.FC <ITodoItem> = ({ todo }) => {
    
    return (
      
      <div className="w-full p-2 border shadow-md rounded-lg flex items-center justify-between bg-gray-200 bg-opacity-50 font-Inter">
        <li>{todo.text} </li>
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
        
        
      </div>
    );
  };
  
  export default TodoItem;
  
  