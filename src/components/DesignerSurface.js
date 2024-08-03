import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TableComponent from "./TableComponent";
import { Box, Paper } from "@mui/material";

const DesignerSurface = ({ tables, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="designer-surface" direction="vertical">
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              minHeight: "400px",
              border: "2px dashed #ccc",
              padding: "16px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {tables.map((table, index) => (
              <Draggable key={table.id} draggableId={table.id} index={index}>
                {(provided) => (
                  <Paper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                      ...provided.draggableProps.style,
                      padding: "16px",
                      margin: "0 0 16px 0",
                      border: "1px solid #ccc",
                      backgroundColor: "white",
                      boxShadow: 3,
                    }}
                  >
                    <TableComponent table={table} />
                  </Paper>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DesignerSurface;
