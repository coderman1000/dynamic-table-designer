// components/LeftMenu.js
"use client";

import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { List, ListItem, ListItemText } from "@mui/material";

const LeftMenu = () => {
  return (
    <div
      style={{ width: "200px", borderRight: "1px solid #ccc", padding: "16px" }}
    >
      <List>
        <Draggable draggableId="new-table" index={0}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                padding: "8px",
                border: "1px solid #ccc",
                marginBottom: "8px",
                backgroundColor: "#fff",
                ...provided.draggableProps.style,
              }}
            >
              <ListItem>
                <ListItemText primary="Table Component" />
              </ListItem>
            </div>
          )}
        </Draggable>
      </List>
    </div>
  );
};

export default LeftMenu;
