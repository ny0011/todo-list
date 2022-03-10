import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(magic) => (
          <ul ref={magic.innerRef} {...magic.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(baba) => (
                <li ref={baba.innerRef} {...baba.draggableProps}>
                  <span {...baba.dragHandleProps}>💥</span>
                  one
                </li>
              )}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {(baba) => (
                <li ref={baba.innerRef} {...baba.draggableProps}>
                  <span {...baba.dragHandleProps}>💥</span>
                  two
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
