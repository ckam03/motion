import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import NotificationAlert from "./NotificationAlert";
const Notifications = () => {
  const [alerts, setAlerts] = useState<number>(0)
  return (
    <Menu>
      <Menu.Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 relative"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <div className="rounded-full text-red-50 bg-red-500 text-xs w-4 absolute top-0 right-20">
          2
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
          className="w-80 shadow-lg rounded-lg bg-gray-50 absolute top-12 right-20 z-50 divide-y divide-gray-200"
        >
          <div className="flex items-center justify-between p-3">
          <h1 className="text-lg font-semibold text-center">
            Notifications
          </h1>
          <button className="hover:text-red-500">Clear All</button>

          </div>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-blue-500 text-white" : "text-black"
                } flex flex-col py-2 px-3 rounded-lg w-full`}
              >
                <div id="Todo" className="flex items-center font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      active ? "text-blue-50" : "text-blue-500"
                    } h-7 w-7 mr-3`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Chris edited Work Stuff
                </div>
                <p className="ml-11">App Todo</p>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-blue-500 text-white" : "text-black"
                } flex flex-col py-2 px-3 rounded-lg w-full`}
              >
                <div id="Todo" className="flex items-center font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      active ? "text-blue-50" : "text-green-500"
                    } h-7 w-7 mr-3`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Saya edited Vacation Plans
                </div>
                <p className="ml-11">Vacation Photos</p>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
      <div className=""></div>
    </Menu>
  );
};
export default Notifications;
