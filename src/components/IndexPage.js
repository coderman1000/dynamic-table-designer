"use client";
// pages/index.js
import React, { useState } from "react";
import DesignerSurface from "../components/DesignerSurface";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";

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
    <div>
      <Button onClick={handleAddTable}>Add Table</Button>
      <DesignerSurface tables={tables} onDragEnd={handleDragEnd} />
    </div>
  );
};

export default IndexPage;
