import React from "react";
import { Todo } from "../../../store/todos";
import { cx } from "@emotion/css";

type TodoCardProps = {
  todo: Todo;
  onDone: () => void;
  onDelete: () => void;
};

const TodoCard = ({ todo, onDelete, onDone }: TodoCardProps) => {
  return (
    <div className="w-[500px] h-[50px] flex items-center justify-between bg-green-200 p-2 rounded-lg">
      <p
        className={cx(
          "flex-1 w-full text-ellipsis overflow-hidden whitespace-nowrap",
          todo?.done && "line-through"
        )}
      >
        {todo.title}
      </p>
      <div className="flex items-center gap-2">
        <button
          className="p-2 disabled:text-gray-300"
          onClick={onDone}
          disabled={todo.done}
        >
          Done
        </button>
        <button className="p-2" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
