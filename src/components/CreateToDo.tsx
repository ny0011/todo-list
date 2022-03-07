import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, category: "TO_DO", id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <label htmlFor="toDo">Write a To Do</label>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          id="toDo"
          {...register("toDo", {
            required: "Please write a To Do",
          })}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
