import React, { createContext, useContext, useEffect, useState } from "react";
export type Todo = {
  title: string;
  id: string;
  done?: boolean;
};
export type Todos = Todo[];
type TodosParams = {
  todos: Todos;
  setTodos: (val: Todos) => void;
};
const Context = createContext({} as TodosParams);
export const useTodosContext = () => useContext(Context);
const TodosContext = ({ children }: any) => {
  const [todos, setTodos] = useState<Todos>([]);

  useEffect(() => {
    const todosInLocalStorage = localStorage.getItem("todo-context");
    if (todosInLocalStorage) {
      const parsed = JSON.parse(todosInLocalStorage) as Todos;
      setTodos(parsed);
    }
  }, []);

  return (
    <Context.Provider value={{ todos, setTodos }}>{children}</Context.Provider>
  );
};

export default TodosContext;
