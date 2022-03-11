import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
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

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) {
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
    } else {
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
    }

    console.log(toDos);
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
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
