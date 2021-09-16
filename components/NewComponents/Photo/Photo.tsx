import { useState, useEffect } from "react";
import Image from "next/image";
import PhotoMenu from "./PhotoMenu";

interface IPhoto {
  id: any;
}
const Photo: React.FC<IPhoto> = ({ id }) => {
  const [image, setImage] = useState<any>();

  //passed as a prop to the photoMenu so setImage can be set after a photo is picked
  const updatePhoto = (photo: any) => {
    setImage(photo);
  };

  return (
    <>
      <div className="bg-gray-200 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
        <div className="p-2 flex items-center hover:bg-gray-400 rounded-lg">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current text-red-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        </div>
        <PhotoMenu updatePhoto={updatePhoto} id={id} />
        </div>

        {image && (
          <Image
            className="rounded-lg mt-10"
            src={image}
            alt="image"
            width={258}
            height={258}
          />
        )}
      </div>
    </>
  );
};
export default Photo;
