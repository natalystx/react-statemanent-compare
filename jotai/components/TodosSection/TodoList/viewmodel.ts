import { useAtom } from "jotai";
import { Todo, todosAtom } from "../../../store/todos";

export const useViewModel = () => {
  const [todos, setTodos] = useAtom(todosAtom);

  const onDone = (todo: Todo) => {
    const newTodos = todos.map((item) => {
      if (item.id === todo.id) return { ...item, done: true };
      return item;
    });

    setTodos(newTodos);
  };

  const onDelete = (todo: Todo) => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };

  return { todos, onDone, onDelete };
};
