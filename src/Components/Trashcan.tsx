import { Droppable, DroppableId } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: #d6eef5;
  border-radius: 5px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#eed6f5"
      : props.isDraggingFromThis
      ? "#dae8ee"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
interface ITrashcanProps {
  droppableId: DroppableId;
}
function Trashcan({ droppableId }: ITrashcanProps) {
  return (
    <Wrapper>
      <div style={{ fontSize: "2em" }}>🗑️</div>
      <Droppable droppableId={droppableId}>
        {(magic, info) => (
          <Area
            ref={magic.innerRef}
            {...magic.droppableProps}
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
          >
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Trashcan;
