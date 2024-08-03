"use client";
import React, { useState } from "react";
import DesignerSurface from "../components/DesignerSurface";
import { v4 as uuidv4 } from "uuid";
import { Button, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const IndexPage = () => {
  const [tables, setTables] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tables);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTables(items);
  };

  const handleAddTable = () => {
    const newTable = { id: uuidv4(), columns: [], rows: [] };
    setTables([...tables, newTable]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dynamic Data Visualization
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddTable}
        sx={{ mb: 2 }}
      >
        Add Table
      </Button>
      <DesignerSurface tables={tables} onDragEnd={handleDragEnd} />
    </Container>
  );
};

export default IndexPage;
