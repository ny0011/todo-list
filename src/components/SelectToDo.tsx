import React from "react";
import { useRecoilState } from "recoil";
import { TodoCheck, toDoCheckState } from "../atoms";

export default function SelectToDo() {
  const [category, setCategory] = useRecoilState(toDoCheckState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <select value={category} onInput={onInput}>
      <option value={TodoCheck.TO_DO}>To Do</option>
      <option value={TodoCheck.DOING}>Doing</option>
      <option value={TodoCheck.DONE}>Done</option>
    </select>
  );
}
