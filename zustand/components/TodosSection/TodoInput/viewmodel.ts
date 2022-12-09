import { FormEvent, useState } from "react";
import { Todos, useTodosStore } from "../../../store/todos";

export const useViewModel = () => {
  const [input, setInput] = useState("");
  const { todos, setTodos } = useTodosStore();

  const addTodo = (input: string): Todos => {
    const newTodo = [
      { id: Date.now().toString(), title: input, done: false },
      ...todos,
    ];
    localStorage.setItem("zustand-todos", JSON.stringify(newTodo));
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
