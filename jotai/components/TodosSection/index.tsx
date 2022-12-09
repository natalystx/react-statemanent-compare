import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodosSection = () => {
  console.log("TodosSection");

  return (
    <div className="p-4 flex flex-col items-center">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodosSection;
