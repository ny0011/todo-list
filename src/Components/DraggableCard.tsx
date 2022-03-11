import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.3)" : "none"};
`;

interface IDraggableCardProps {
  todo: string;
  index: number;
}

function DraggableCard({ todo, index }: IDraggableCardProps) {
  console.log(todo, "render");
  return (
    <Draggable draggableId={todo} index={index} key={todo}>
      {(baba, info) => (
        <Card
          ref={baba.innerRef}
          {...baba.draggableProps}
          {...baba.dragHandleProps}
          isDragging={info.isDragging}
        >
          <span>💥</span>
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
