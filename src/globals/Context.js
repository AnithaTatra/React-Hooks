import React, { useReducer, createContext } from "react";
export const ContextState = createContext();

const initialState = localStorage.getItem("users");
console.log("Initialsatte...", initialState);

console.log("UserData:::::",this.userData);

const reducerMethod = (persons, action) => {
  switch (action.type) {
    case "delete":
      return persons.filter((_, index) => index !== action.index);

    default:
      return persons;
  }
};

export const ContextProvider = ({ children }) => {
  const [persons, dispatch] = useReducer(reducerMethod, initialState);

  return (
    <ContextState.Provider value={[persons, dispatch]}>
      {children}
    </ContextState.Provider>
  );
};
