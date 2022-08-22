import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const ListInput = ({ name, options, className, value, onChangeFunction }) => {
  const [currentValue, setCurrentValue] = useState("");
  const handleChange = (event) => {
    setCurrentValue(event.target.value);
    onChangeFunction({
      name: name,
      value: event.target.value,
    });
  };
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <div className={className}>
      <TextField
        id="outlined-select-currency"
        fullWidth
        select
        label={name}
        value={currentValue}
        onChange={handleChange}
        helperText="Please select your currency"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default ListInput;
