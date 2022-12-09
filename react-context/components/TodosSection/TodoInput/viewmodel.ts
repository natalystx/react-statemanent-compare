import { FormEvent, useState } from "react";
import { Todos, useTodosContext } from "../../../context/todos";

export const useViewModel = () => {
  const [input, setInput] = useState("");
  const { setTodos, todos } = useTodosContext();

  const addTodo = (input: string): Todos => {
    const newTodo = [
      { id: Date.now().toString(), title: input, done: false },
      ...todos,
    ];
    localStorage.setItem("todo-context", JSON.stringify(newTodo));
    return newTodo;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    setTodos(addTodo(input));
    setInput("");
  };

  return {
    handleSubmit,
    input,
    setInput,
  };
};
