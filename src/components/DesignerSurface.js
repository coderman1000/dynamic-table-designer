// components/DesignerSurface.js
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TableComponent from "./TableComponent";

const DesignerSurface = ({ tables, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="designer-surface" direction="vertical">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              minHeight: "400px",
              border: "1px dashed #ccc",
              padding: "16px",
            }}
          >
            {tables.map((table, index) => (
              <Draggable key={table.id} draggableId={table.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      padding: "16px",
                      margin: "0 0 16px 0",
                      border: "1px solid #ccc",
                      backgroundColor: "white",
                    }}
                  >
                    <TableComponent table={table} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DesignerSurface;
