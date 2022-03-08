import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import SelectToDo from "./SelectToDo";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <div
      style={{
        textAlign: "center",
        width: "410px",
        margin: "auto",
        height: "900px",
        padding: "20px",
      }}
    >
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <SelectToDo />
      <ul style={{ marginTop: "7px" }}>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
