type NewComponentsState = {
    components: any[];  
    addComponent: ({id: any, componentType: number}) => void;
    deleteComponent: (id: any) => components;
}

interface todo {
    id: any,
    text: string,
    isCompleted: boolean
}
type ToggleTodo = (selectedTodo: todo) => void
type addTodo = (todo: string) => void;
type Component = (component: any) => void;