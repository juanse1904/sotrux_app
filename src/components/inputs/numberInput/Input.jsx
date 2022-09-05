import React from "react";
import TextField from "@mui/material/TextField";

const NumberInput = ({ name, placeHolder, className, value, error, errorMessage, onChangeFunction }) => {
  const inputHandleChange = (event) => {
    onChangeFunction({
      name: name,
      value: event.target.value,
    });
  };
  return (
    <>
      <div className={`${className} ${error ? "input-error" : ""}`}>
        <TextField
          id="outlined-basic"
          fullWidth
          value={value}
          margin="none"
          name={name}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          onChange={inputHandleChange}
          label={placeHolder}
          variant="outlined"
        />

        <p>{error && errorMessage}</p>
      </div>
    </>
  );
};

export default NumberInput;
