import React, { createContext, useReducer } from "react";

export const ContextState = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return [...state, action.data];
    case "DELETE_PERSON":
      return state.filter((person) => person.id !== action.data.id);
    case "EDIT_PERSON":
      return [
        ...state.filter((person) => person.id !== action.data.id),
        action.data,
      ];

    default:
      break;
  }
};

export const Provider = ({ children }) => {
  const [person, dispatch] = useReducer(reducer, []);

  return (
    <ContextState.Provider value={[person, dispatch]}>
      {children}
    </ContextState.Provider>
  );
};
