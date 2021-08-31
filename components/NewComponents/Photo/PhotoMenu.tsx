import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect, useContext } from "react";
import Image from "next/image";
import PhotoSearch from "./PhotoSearch";
import { NewComponentContext } from "../../../Context/NewComponentContext";

interface IMenuProps {
  updatePhoto: any;
  
}
const fetchPhotos = async () => {
  const url = "/api/Photos";
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const results = await response.json();
  return results;
};

const PhotosMenu: React.FC<IMenuProps> = ({ updatePhoto }) => {
  const [photos, setPhotos] = useState<any>([])
  const { deleteComponent } = useContext(NewComponentContext)

  useEffect(() => {
    fetchPhotos().then((res) => {
      setPhotos(res.result);
    });
  }, []);
  let fetchedPhotos = photos.map((photo: any, i: number) => {
    return (
      <Image
        onClick={() => updatePhoto(photo.urls.small)}
        src={photo.urls.thumb}
        key={i}
        alt="images"
        width={100}
        height={100}
      />
    );
  });

  return (
    <div className="flex justify-end items-center">
      <Menu as="div" className="z-50">
        <Menu.Button>
          <div className="p-2 rounded-lg hover:bg-gray-300 ease-in-out duration-100">
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
            className="shadow-lg rounded-lg bg-gray-50 absolute p-1 font-Inter"
          >
            <div className="flex">
              <div className="flex flex-col">

              <ul className="space-y-1 px-1">
                <li className="flex items-center cursor-pointer p-2 rounded-lg w-44 hover:bg-blue-500 hover:text-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  Recommended
                </li>
                <li className="flex items-center cursor-pointer p-2 rounded-lg w-44 hover:bg-blue-500 hover:text-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Upload
                </li>
              </ul>
                <li  className=" text-red-500 flex items-center cursor-pointer p-2 rounded-lg w-44 hover:bg-blue-500 hover:text-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-4 fill-current text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Delete
                </li>
              </div>
              <div className="flex flex-col justify-center">
                <PhotoSearch />
                <div className="grid grid-cols-4 gap-1 cursor-pointer">
                  {fetchedPhotos}
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PhotosMenu;
