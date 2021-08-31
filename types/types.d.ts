type NewComponentsState = {
    components: any[];
    
    addComponent: ({id: any, componentType: number}) => void;
    deleteComponent: (id: any) => components;
}