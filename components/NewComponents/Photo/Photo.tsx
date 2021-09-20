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
        <div className="flex items-center justify-end">
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
