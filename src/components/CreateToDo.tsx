import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { DefaultCategory, toDoCheckState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
  category: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const check = useRecoilValue(toDoCheckState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo, category }: IForm) => {
    setToDos((oldToDos) => [
      {
        text: toDo,
        check: check,
        id: Date.now(),
        category: category ? category : DefaultCategory,
      },
      ...oldToDos,
    ]);
    setValue("toDo", "");
    setValue("category", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <Container>
          <label htmlFor="toDo">Write a To Do</label>
          <input
            id="toDo"
            {...register("toDo", {
              required: "Please write a To Do",
            })}
          />
        </Container>
        <Container>
          <label htmlFor="category">Write a category</label>
          <input id="category" {...register("category")} />
        </Container>

        <button>Add</button>
      </form>
    </div>
  );
}
