
export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_COMPONENT":
      return {
        ...state,
        components: [...state.components, action.payload],
      };
    case "DELETE_COMPONENT":
      return {
        ...state,
        components: state.components.filter(
          (component: any) =>  component.id !== action.payload)
      };
    default:
      return state;
  }
}
