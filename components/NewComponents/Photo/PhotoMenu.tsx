import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import PhotoSearch from "./PhotoSearch";

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

const PhotosMenu: React.FC <IMenuProps> = ({ updatePhoto }) => {
  const [photos, setPhotos] = useState<any>([]);

  useEffect(() => {
    fetchPhotos().then((res) => {
      setPhotos(res.result);
    });
  }, []);
  console.log(photos)
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
    <div className="flex justify-end items-center pb-1">
      <Menu as="div" className="z-50">
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
            className="w-96 shadow-lg rounded-lg bg-gray-50 absolute p-1"
          >
            <div className="flex flex-col justify-center">
              <PhotoSearch /> 
              <div className="grid grid-cols-4 gap-1 cursor-pointer">{fetchedPhotos}</div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default PhotosMenu;
