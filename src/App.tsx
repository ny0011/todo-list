import {
  DragDropContext,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";
import Trashcan from "./Components/Trashcan";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

interface IInfo {
  destination: DraggableLocation;
  source: DraggableLocation;
}

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const deleteToDos = (source: DraggableLocation) => {
    setToDos((allBoards) => {
      const board = [...allBoards[source.droppableId]];
      board.splice(source.index, 1);
      return { ...allBoards, [source.droppableId]: board };
    });
  };
  const changeToDosWithSameBoard = ({ destination, source }: IInfo) => {
    setToDos((allBoards) => {
      const board = [...allBoards[source.droppableId]];
      const card = board[source.index];
      board.splice(source.index, 1);
      board.splice(destination.index, 0, card);
      return {
        ...allBoards,
        [source.droppableId]: board,
      };
    });
  };
  const changeToDosWithDiffrentBoard = ({ destination, source }: IInfo) => {
    setToDos((allBoards) => {
      const sourceBoard = [...allBoards[source.droppableId]];
      const sourceCard = sourceBoard[source.index];
      sourceBoard.splice(source.index, 1);
      const destinationBoard = [...allBoards[destination.droppableId]];
      destinationBoard.splice(destination.index, 0, sourceCard);
      return {
        ...allBoards,
        [source.droppableId]: sourceBoard,
        [destination.droppableId]: destinationBoard,
      };
    });
  };

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;

    if (!destination) return;
    if (destination.droppableId === "trashcan") {
      return deleteToDos(source);
    }
    if (destination.droppableId === source.droppableId) {
      if (destination.index === source.index) return;
      return changeToDosWithSameBoard({ destination, source });
    }
    return changeToDosWithDiffrentBoard({ destination, source });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => {
            return (
              <Board toDos={toDos[boardId]} boardId={boardId} key={boardId} />
            );
          })}
        </Boards>
        <Trashcan droppableId="trashcan" />
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
