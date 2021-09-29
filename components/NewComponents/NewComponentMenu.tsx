import React, { useContext, Fragment, useState } from "react";
import { NewComponentContext } from "../../Context/NewComponentContext";
import { Menu, Transition } from "@headlessui/react";
import Note from "./Note/Note";
import TodoList from "./Todo/TodoList";
import Photo from "./Photo/Photo";

const NewComponentMenu = () => {
  const { addComponent } = useContext(NewComponentContext);

  const newComponent = (componentType: number) => {
    addComponent({
      id: Math.floor(Math.random() * 100000000),
      componentType: componentType,
    });
  };
  return (
    <div className="w-6 h-6 mt-14 ml-4 shadow-md text-gray-800 font-Inter z-50">
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
          <Menu.Items as="div" className="w-60 shadow-lg rounded-lg bg-white dark:bg-gray-600">
            <h1 className="text-center font-Inter text-xl py-2 dark:text-gray-200">Components</h1>
            <Menu.Item>
              {({ active }) => (
                <button
                  id="Todo"
                  onClick={() => newComponent(1)}
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-black"
                  } flex items-center py-2 px-3 rounded-lg w-full dark:text-gray-300`}
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
                  onClick={() => newComponent(2)}
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
                  onClick={() => newComponent(3)}
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
            <Menu.Item>
              {({ active }) => (
                <li
                  onClick={() => newComponent(4)}
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
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  Link
                </li>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <li
                  onClick={() => newComponent(5)}
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Container
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
