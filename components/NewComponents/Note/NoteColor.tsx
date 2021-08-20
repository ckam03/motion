import { useState } from "react"

interface INoteColor {
    handleColor: any
}

const colors = [
    {name: "red", style: "bg-red-300"},
    {name: "orange", style: "bg-orange-300"},
    {name: "lime", style: "bg-lime-300"},
    {name: "green", style: "bg-green-300"},
    {name: "blue", style: "bg-blue-300"},
    {name: "indigo", style: "bg-indigo-300"},
    {name: "pink", style: "bg-pink-300"},
    
]

const NoteColorChanger: React.FC <INoteColor> = ({ handleColor }) => {
    const [color, setColor] = useState<any>()
    
    const handleClick = (color: any) => {
        handleColor(color)
    }
     const colorsArray = colors.map((color,i) => {
         return <div className={`h-8 w-8 rounded-full ${color.style}`} key={i} onClick={() => handleClick(color.style)}></div>
     })
    return (
        <div className="flex items-center">
           {colorsArray}
        </div>
    );
}
export default NoteColorChanger;