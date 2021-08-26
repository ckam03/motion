import { useState, useEffect } from "react";
import Image from "next/image";
import PhotoMenu from "./PhotoMenu";
import Draggable from 'react-draggable';

interface IPhoto {
  id: any;
}
const Photo: React.FC <IPhoto> = ({ id }) => {
  const [image, setImage] = useState<any>();

  const updatePhoto = (photo: any) => {
    setImage(photo);
  };

  return (
    <>
    <Draggable>

      <div className="h-80 w-64 bg-gray-200 rounded-lg shadow-lg">
        <PhotoMenu updatePhoto={updatePhoto} />
        {image && <Image className="rounded-lg mt-10"src={image} alt="image" width={258} height={258}  />}

      </div>
    </Draggable>
    </>
  );
};
export default Photo;
