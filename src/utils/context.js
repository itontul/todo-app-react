import React, { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const getItemsFromLS = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const initialState = {
  list: getItemsFromLS(),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(state.list));
  }, [state.list]);

  const addTodo = (item) => {
    dispatch({ type: "ADD", ...item });
  };

  const completeTodo = (id) => {
    dispatch({ type: "COMPLETE", payload: id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const editTodo = (id, item) => {
    dispatch({ type: "EDIT", payload: { id, item } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addTodo,
        completeTodo,
        removeTodo,
        editTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
