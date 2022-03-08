import { atom, selector } from "recoil";

const SaveToDos = (key: string, todos: IToDo[]) => {
  localStorage.setItem(key, JSON.stringify(todos));
};

const LoadToDos = (key: string) => {
  return JSON.parse(
    localStorage.hasOwnProperty(key) ? (localStorage.getItem(key) as any) : "[]"
  );
};

const toDoEffects =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    setSelf(LoadToDos(key));
    onSet((newValue: IToDo[]) => {
      SaveToDos(key, newValue);
    });
  };

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
  effects_UNSTABLE: [toDoEffects("toDo")],
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
