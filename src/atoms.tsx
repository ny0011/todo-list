import { atom, selector } from "recoil";

export enum TodoCheck {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const DefaultCategory = "default";

export interface IToDo {
  text: string;
  id: number;
  category: string;
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
    const toDoCheck = get(toDoCheckState);
    return toDos.filter((todo) => todo.check === toDoCheck);
  },
});

export const categoryState = atom<string>({
  key: "category",
  default: DefaultCategory,
});
