import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import "./paginationRow.css";

const PaginationRow = ({ rowsPerPageOptions, count, page, onRowsPerPageChange, rowsPerPage, onPageChange }) => {
  const intervalEnd = rowsPerPage * (page + 1);
  const intervalInit = intervalEnd - rowsPerPage + 1;
  return (
    <div className="pagination-container">
      <p>Filas</p>
      <FormControl variant="standard" sx={{ borderBottom: "none" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rowsPerPage}
          sx={{ fontSize: 14 }}
          onChange={onRowsPerPageChange}
        >
          {rowsPerPageOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p>{`${intervalInit} - ${intervalEnd} de ${count}`}</p>
      <span className={`ico icon-grid-back-back pagination-buttons`}></span>
      <span
        className={`ico icon-grid-back pagination-buttons`}
        onClick={() => {
          onPageChange(page == 0 ? 0 : page - 1);
        }}
      ></span>
      <span
        className={`ico icon-grid-next pagination-buttons`}
        onClick={() => {
          onPageChange(page + 1);
        }}
      ></span>
      <span className={`ico icon-grid-next-next pagination-buttons`}></span>
    </div>
  );
};
export default PaginationRow;
