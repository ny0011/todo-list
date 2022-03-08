import React from "react";
import { TodoCheck, IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

export default function ToDo({ text, check, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, check: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {check !== TodoCheck.TO_DO && (
        <button name={TodoCheck.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {check !== TodoCheck.DOING && (
        <button name={TodoCheck.DOING} onClick={onClick}>
          Doing
        </button>
      )}

      {check !== TodoCheck.DONE && (
        <button name={TodoCheck.DONE} onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
