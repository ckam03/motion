import { MouseEvent, useEffect, useState, Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Menu, Transition } from "@headlessui/react";
import Draggable from 'react-draggable';

const TodoList = () => {
  const [todos, setTodos] = useState<any>();
  const [title, setTitle] = useState<string>();

  return (
    <Draggable>

    <div className="w-64 bg-gray-50 rounded-lg shadow-lg p-2 relative space-y-2">
      <div className="flex justify-between items-center p-1">
        <span contentEditable="true" className="font-bold">
          Title
        </span>
        <Menu>
          <Menu.Button>
            <div className="p-1 rounded-lg hover:bg-gray-300 ease-in-out duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="div"
              className="w-48 shadow-lg rounded-lg bg-gray-50 absolute translate-y-16 translate-x-52 z-50"
            >
              
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="Todo"
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-black"
                    } flex items-center py-2 px-3 rounded-lg w-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Edit Title
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <li
                    className={`${
                      active ? "bg-blue-500 text-white" : " text-black"
                    } flex items-center py-2 px-3 cursor-pointer rounded-lg`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete List
                  </li>
                )}
              </Menu.Item>
              
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <ul>
        <TodoItem />
      </ul>
      <TodoForm />
    </div>
    </Draggable>
  );
};

export default TodoList;
