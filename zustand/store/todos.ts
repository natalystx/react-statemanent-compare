import create from "zustand";

export type Todo = {
  title: string;
  id: string;
  done?: boolean;
};
export type Todos = Todo[];

const getTodoFromLocalStorage = (): Todos => {
  const inLocalStorageData = localStorage.getItem("zustand-todos");
  if (!inLocalStorageData) return [];
  return JSON.parse(inLocalStorageData) as Todos;
};

type TodosStoreParams = {
  todos: Todos;
  setTodos: (val: Todos) => void;
};

export const useTodosStore = create<TodosStoreParams>((set) => ({
  todos: getTodoFromLocalStorage(),
  setTodos: (val: Todos) => set((state) => ({ ...state, todos: val })),
}));
