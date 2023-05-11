import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ArrowIcon from './arrowIcon';

export const ListInput = ({
  name, options, className, value, onChangeFunction,
}) => {
  console.log('value in the list input', value);
  const handleChange = (event) => {
    onChangeFunction({
      name,
      value: event.target.value,
    });
  };

  return (
    <div className={className}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={name}
          IconComponent={ArrowIcon}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={`menuItem_${option}`} value={option}>
              {option}
            </MenuItem>
          ))}
          <MenuItem value={value}>{value}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ListInput;
