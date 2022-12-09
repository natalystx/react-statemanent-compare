import React from "react";
import { useViewModel } from "./viewmodel";

const TodoInput = () => {
  const { handleSubmit, input, setInput } = useViewModel();
  console.log("TodoInput");

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex gap-4 items-center">
      <label htmlFor="todo">Todo:</label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="todo"
        className="w-[200px] h-12 rounded-lg border-[1px] px-2"
      />
      <button
        className="w-[100px] h-[50px] bg-slate-800 text-white rounded-lg"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
