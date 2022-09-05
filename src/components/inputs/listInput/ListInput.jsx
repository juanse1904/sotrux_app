import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ArrowIcon from "./arrowIcon";

export const ListInput = ({ name, options, className, value, onChangeFunction }) => {
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentValue}
          label={name}
          IconComponent={ArrowIcon}
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ListInput;
