import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: IToDo[];
}

const SaveToDos = (key: string, todos: IToDoState) => {
  localStorage.setItem(key, JSON.stringify(todos));
};

const LoadToDos = (key: string) => {
  return JSON.parse(
    localStorage.hasOwnProperty(key)
      ? (localStorage.getItem(key) as any)
      : '{"To Do": [], "Doing": [], "Done": []}'
  );
};

const toDoEffects =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    setSelf(LoadToDos(key));
    onSet((newValue: IToDoState) => {
      SaveToDos(key, newValue);
    });
  };

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
  effects_UNSTABLE: [toDoEffects("toDo")],
});
