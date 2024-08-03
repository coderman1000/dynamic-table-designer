// components/TableComponent.js
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import axios from "axios";

const TableComponent = ({ table }) => {
  const [columns, setColumns] = useState(table.columns || []);
  const [rows, setRows] = useState(table.rows || []);
  const [data, setData] = useState([]);

  const handleAddColumn = () => {
    setColumns([...columns, `Column ${columns.length + 1}`]);
  };

  const handleAddRow = () => {
    setRows([...rows, {}]);
  };

  const fetchData = async () => {
    // Assuming your API endpoint is /api/data
    const response = await axios.get("/api/data");
    setData(response.data);
  };

  return (
    <div>
      <Button onClick={handleAddColumn}>Add Column</Button>
      <Button onClick={handleAddRow}>Add Row</Button>
      <Button onClick={fetchData}>Fetch Data</Button>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  {data[rowIndex]?.[col] || ""}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
