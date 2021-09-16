import React, { useContext } from "react";
import { NewComponentContext } from "../Context/NewComponentContext";
import NewComponentMenu from "./NewComponents/NewComponentMenu";
import Note from "./NewComponents/Note/Note";
import Photo from "./NewComponents/Photo/Photo";
import TodoList from "./NewComponents/Todo/TodoList";
import Link from "./NewComponents/Link/Link";

const newComponents: any = {
  1: TodoList,
  2: Photo,
  3: Note,
  4: Link
}
const Board = () => {
    const { components } = useContext(NewComponentContext)

    //map through the components array and render
    const componentList  = components.map((component, i) => {
      const id: number = component.componentType
      const NewComponent = newComponents[id]
      
      //check if the newComponents object value matches what's in the array so it knows what type to render
      for (const property in newComponents) {
          const value = parseInt(property)
          if (value == id) {
            return (
              <div key={component.id}>
                <NewComponent id={component.id}/>
              </div>
            )
          }
      }
    })
  
    return (
      <div className="flex space-x-10 mt-8">
        <div className="grid grid-cols-6 gap-8 ml-4">{componentList}

        <NewComponentMenu />
        </div>
      </div>
    )
  }
  
  export default Board;