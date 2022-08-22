import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const TextInput = ({ type, name, placeHolder, className, value, error, errorMessage, onChangeFunction, position }) => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const passwordHandleChange = (event) => {
    setValues({ ...values, password: event.target.value });
    onChangeFunction({
      name: name,
      value: event.target.value,
    });
  };

  const inputHandleChange = (event) => {
    onChangeFunction({
      name: name,
      value: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const elementType = (typeInput, name, value, placeHolder) => {
    switch (typeInput) {
      case "checkbox":
        return <FormControlLabel value={value} control={<Checkbox />} label={placeHolder} labelPlacement="start" />;
      case "password":
        return (
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{placeHolder}</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              fullWidth
              margin="dense"
              name={name}
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={passwordHandleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={placeHolder}
            />
          </FormControl>
        );
      default:
        return (
          <>
            <TextField
              id="outlined-basic"
              fullWidth
              value={value}
              margin="dense"
              name={name}
              onChange={inputHandleChange}
              label={placeHolder}
              variant="outlined"
            />
          </>
        );
    }
  };
  return (
    <>
      <div className={`${className} ${error ? "input-error" : ""}`}>
        {elementType(type, name, value, placeHolder, onChangeFunction, position)}

        <p>{error && errorMessage}</p>
      </div>
    </>
  );
};

export default TextInput;
