type NewComponentsState = {
    components: any[];  
    addComponent: ({id: any, componentType: number}) => void;
    deleteComponent: (id: any) => components;
}

type ThemeState = {
    toggleTheme: boolean;
    setToggleTheme: (toogle: boolean) => void;
}
interface todo {
    id: any,
    text: string,
    isCompleted: boolean
}
type ToggleTodo = (selectedTodo: todo) => void
type addTodo = (todo: string) => void;
type Component = (component: any) => void;
type Board = (board: number) => void;