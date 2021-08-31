import { Menu, Transition } from "@headlessui/react";
import React, { useState, Fragment, useContext } from "react";
import NoteColorChanger from "./NoteColor";
import Draggable from "react-draggable";
import { NewComponentContext } from "../../../Context/NewComponentContext";

interface INote {
  id: any;
}
const Note: React.FC<INote> = ({ id }) => {
  const [content, setContent] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [color, setColor] = useState<any>();
  const [position, setPosition] = useState<any>({ x: 0, y: 0 });

  const { deleteComponent } = useContext(NewComponentContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleColor = (notecolor: any) => {
    setColor(notecolor);
  };

  const handleTitle = () => {
    setTitle()
  };

  const trackPosition = (pos: any) => {
    setPosition({ x: pos.x, y: pos.y });
  };

  const deleteNote = () => {
    deleteComponent(id);
  };

  return (
    <div
      className={`${color} h-64 w-64 bg-yellow-200 text-black rounded-lg p-2 shadow-lg`}
    >
      <div className="flex justify-between items-center pb-6">
        <input
          className={`${color} border-none bg-yellow-200 rounded-lg h-8 w-40 font-bold font-Inter`}
          type="text"
          name="Note"
          value={title}
        />
        <Menu>
          <Menu.Button>
            <div
              className={`hover:${color} p-1 rounded-lg ease-in-out duration-100`}
            >
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
              className={`bg-gray-100 font-Inter w-64 shadow-lg rounded-lg absolute translate-y-24 -translate-x-2 z-50`}
            >
              <Menu.Item>
                {({ active }) => (
                  <div
                    id="color"
                    className={` flex items-center py-2 px-3 rounded-lg w-full`}
                  >
                    {<NoteColorChanger handleColor={handleColor} />}
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    id="Todo"
                    onClick={handleTitle}
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
                    onClick={deleteNote}
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
                    Delete Note
                  </li>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <textarea
        className={`${color} bg-yellow-200 font-Inter w-full h-48 border-none focus:border-none focus:ring-0 resize-none`}
        onChange={() => {
          handleChange;
        }}
      />
    </div>
  );
};
export default Note;
