import React, { createContext, useState } from 'react';

const NewComponentState: NewComponentsState = {
    components: [],   
    setComponent: () => {}
}

export const NewComponentContext = React.createContext<NewComponentsState>(NewComponentState);

export const NewComponentProvider: React.FC = ({ children }) => {
    const [components, setComponents] = useState(NewComponentState.components)

    const setComponent = (newComponent: any) => setComponents((components) => [...components, newComponent])
    return (
        <NewComponentContext.Provider value={{components, setComponent}}>
            {children}
        </NewComponentContext.Provider>
    );
}