import React, { useContext } from "react";
import { NewComponentContext } from "../Context/NewComponentContext";
import NewComponentMenu from "./NewComponents/NewComponentMenu";

const Board = () => {
    const { components } = useContext(NewComponentContext);
    let renderedArray = components.map((component, i) => {
      return (
        <div className="" key={i}>
          {component}
        </div>
      );
    });
  
    return (
      <div className="flex space-x-10 mt-8">
        <NewComponentMenu />
        <div className="grid grid-cols-6 gap-8">{renderedArray}</div>
      </div>
    );
  };
  
  export default Board;