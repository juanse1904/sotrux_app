import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import './paginationRow.css';

const PaginationRow = ({
  rowsPerPageOptions, count, page, onRowsPerPageChange, rowsPerPage, onPageChange,
}) => {
  const intervalEnd = rowsPerPage * (page + 1);
  const intervalInit = intervalEnd - rowsPerPage + 1;
  return (
    <div className="pagination-container">
      <p>Filas</p>
      <FormControl variant="standard" sx={{ borderBottom: 'none' }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rowsPerPage}
          sx={{ fontSize: 14 }}
          onChange={onRowsPerPageChange}
        >
          {rowsPerPageOptions.map((option) => (
            <MenuItem key={`menuItem_${option}`} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p>{`${intervalInit} - ${intervalEnd} de ${count}`}</p>
      <span className="ico icon-grid-back-back pagination-buttons" />
      <span
        role="button"
        tabIndex={0}
        aria-label="go to previous page"
        className="ico icon-grid-back pagination-buttons"
        onKeyUp={() => {
          onPageChange(page === 0 ? 0 : page - 1);
        }}
        onClick={() => {
          onPageChange(page === 0 ? 0 : page - 1);
        }}
      />
      <span
        role="button"
        aria-label="go to next page"
        className="ico icon-grid-next pagination-buttons"
        tabIndex={0}
        onKeyDown={() => {
          onPageChange(page + 1);
        }}
        onClick={() => {
          onPageChange(page + 1);
        }}
      />
      <span className="ico icon-grid-next-next pagination-buttons" />
    </div>
  );
};
export default PaginationRow;
