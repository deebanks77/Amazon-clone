import { createContext, useReducer, useContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children, initialState, reducer }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};

const useStateValue = () => useContext(UserContext);

export { UserContextProvider };

export default useStateValue;
