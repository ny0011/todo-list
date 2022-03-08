import { atom, selector } from "recoil";

export enum TodoCheck {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  check: TodoCheck;
}

export const toDoCheckState = atom<TodoCheck>({
  key: "toDoCheck",
  default: TodoCheck.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(toDoCheckState);
    return toDos.filter((todo) => todo.check === category);
  },
});
