import { useState } from "react";

interface INoteColor {
  handleColor: any;
}

interface IColors {
  name: string;
  style: string;
}

const colors: IColors[] = [
  { name: "red", style: "bg-red-300" },
  { name: "orange", style: "bg-orange-300" },
  { name: "lime", style: "bg-lime-300" },
  { name: "green", style: "bg-green-300" },
  { name: "blue", style: "bg-blue-300" },
  { name: "indigo", style: "bg-indigo-300" },
  { name: "pink", style: "bg-pink-300" },
];

const NoteColorChanger: React.FC<INoteColor> = ({ handleColor }) => {
  const [color, setColor] = useState<string>();

  const handleClick = (color: string) => {
    handleColor(color);
  };
  const colorsArray = colors.map((color, i) => {
    return (
      <div
        className={`h-8 w-8 rounded-full border border-gray-800 ${color.style}`}
        key={i}
        onClick={() => handleClick(color.style)}
      ></div>
    );
  });
  return (
    <div className="flex items-center justify-center space-x-0.5">
      {colorsArray}
    </div>
  );
};
export default NoteColorChanger;
