import React, { useContext } from "react";
import { NewComponentContext } from "../Context/NewComponentContext";
import NewComponentMenu from "./NewComponents/NewComponentMenu";
import Note from "./NewComponents/Note/Note";
import Photo from "./NewComponents/Photo/Photo";
import TodoList from "./NewComponents/Todo/TodoList";

const Board = () => {
    const { components } = useContext(NewComponentContext);

    const componentList  = components.map((component, i) => {
      if (component.componentType == 1) {
        return (
          <div key={i}>
            <TodoList id={component.id} />
          </div>
        );
      }
      else if (component.componentType == 2) {
        return (
          <div key={i}>
            <Photo id={component.id} />
          </div>
        ) 
      }
      else {
        return (
          <div key={i}>
            <Note id={component.id} />
          </div>
        )
        
      }
    });
  
    return (
      <div className="flex space-x-10 mt-8">
        <NewComponentMenu />
        <div className="grid grid-cols-6 gap-8">{componentList}</div>
      </div>
    );
  };
  
  export default Board;