import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const CheckBoxInput = ({ name, className, value, error, errorMessage }) => {
  return (
    <>
      <div className={`${className} ${error ? "input-error" : ""}`}>
        <FormControlLabel control={<Checkbox checked={value} />} label={name} labelPlacement="start" />
        <p>{error && errorMessage}</p>
      </div>
    </>
  );
};

export default CheckBoxInput;
