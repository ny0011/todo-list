import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDraggableCardProps {
  todo: string;
  index: number;
}

function DraggableCard({ todo, index }: IDraggableCardProps) {
  console.log(todo, "render");
  return (
    <Draggable draggableId={todo} index={index} key={todo}>
      {(baba) => (
        <Card
          ref={baba.innerRef}
          {...baba.draggableProps}
          {...baba.dragHandleProps}
        >
          <span>💥</span>
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
