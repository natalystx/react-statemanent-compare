import { atomWithStorage } from "jotai/utils";

export type Todo = {
  title: string;
  id: string;
  done?: boolean;
};
export type Todos = Todo[];

export const todosAtom = atomWithStorage<Todos>("todos", []);
