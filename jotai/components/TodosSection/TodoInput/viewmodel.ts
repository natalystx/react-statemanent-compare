import { useAtom } from "jotai";
import { FormEvent, useState } from "react";
import { Todos, todosAtom } from "../../../store/todos";

export const useViewModel = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useAtom(todosAtom);

  const addTodo = (input: string): Todos => {
    return [{ id: Date.now().toString(), title: input, done: false }, ...todos];
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
