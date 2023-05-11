import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordInput = ({
  name, placeHolder, className, error, errorMessage, onChangeFunction,
}) => {
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const passwordHandleChange = (event) => {
    setValues({ ...values, password: event.target.value });
    onChangeFunction({
      name,
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

  return (
    <div className={`${className} ${error ? 'input-error' : ''}`}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{placeHolder}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          fullWidth
          margin="dense"
          name={name}
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={passwordHandleChange}
          endAdornment={(
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
            )}
          label={placeHolder}
        />
      </FormControl>

      <p>{error && errorMessage}</p>
    </div>
  );
};

export default PasswordInput;
