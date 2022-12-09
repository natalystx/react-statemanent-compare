import { Todo, useTodosContext } from "../../../context/todos";

export const useViewModel = () => {
  const { todos, setTodos } = useTodosContext();

  const onDone = (todo: Todo) => {
    const newTodos = todos.map((item) => {
      if (item.id === todo.id) return { ...item, done: true };
      return item;
    });

    localStorage.setItem("todo-context", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const onDelete = (todo: Todo) => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    localStorage.setItem("todo-context", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return { todos, onDone, onDelete };
};
