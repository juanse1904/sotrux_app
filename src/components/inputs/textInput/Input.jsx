import React from "react";

import TextField from "@mui/material/TextField";

const TextInput = ({ readOnly, name, className, value, error, errorMessage, onChangeFunction, code }) => {
  const inputHandleChange = (event) => {
    onChangeFunction({
      name: code,
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
          InputProps={{
            readOnly,
          }}
          onChange={inputHandleChange}
          label={name}
          variant="outlined"
        />

        <p>{error && errorMessage}</p>
      </div>
    </>
  );
};

export default TextInput;
