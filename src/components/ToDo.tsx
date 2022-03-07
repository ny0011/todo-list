import { IToDo } from "../atoms";

export default function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>To Do</button>
      <button>Done</button>
    </li>
  );
}
