import React from "react";
import { useViewModel } from "./viewmodel";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const { todos, onDelete, onDone } = useViewModel();
  console.log("TodoList");

  return (
    <div className="flex flex-col gap-2 my-10 max-h-[800px] overflow-auto">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo)}
          onDone={() => onDone(todo)}
        />
      ))}
    </div>
  );
};

export default TodoList;
