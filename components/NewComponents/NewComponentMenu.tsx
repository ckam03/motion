import React, { useContext, Fragment } from "react"
import { NewComponentContext } from "../../Context/NewComponentContext"
import { Menu, Transition } from '@headlessui/react'
import Note from "./Note/Note";
import TodoList from "./Todo/TodoList";
import Photo from "./Photo/Photo";

const NewComponentMenu = () => {
    const { setComponent } = useContext(NewComponentContext)
  
    return (
      <div className="w-6 h-6 mt-4 ml-4 shadow-md text-gray-800 font-Inter z-50">
        <Menu>
          <Menu.Button>
            <div className="p-1 rounded-lg bg-blue-500 hover:bg-blue-600 ease-in-out duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
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
            <Menu.Items as="div" className="w-60 shadow-lg rounded-lg bg-white">
              <h1 className="text-center font-Inter text-2xl pb-2">Items</h1>
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="Todo"
                    onClick={() => setComponent(<TodoList />) }
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                    Todo list
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <li
                    //onClick={() => setComponent(<Moodboard />) }
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
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Mood Board
                  </li>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <li
                    onClick={() => setComponent(<Photo />) }
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Image
                  </li>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <li
                    onClick={() => setComponent(<Note />) }
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Note
                  </li>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  };
  
  export default NewComponentMenu;