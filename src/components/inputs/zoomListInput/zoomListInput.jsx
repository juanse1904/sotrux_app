import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ArrowIcon from './arrowIcon';
import { addNewTab } from '../../../ducks/tabs';
import { sendActiveViewId } from '../../../ducks/activeView';
import zoomIcon from '../../../assets/zoom-icon.svg';

export const ZoomListInput = ({
  name, options, className, value, onChangeFunction, tableToZoom,
}) => {
  const currentIndex = useSelector((state) => state.Tabs.tablesCounter);
  const dispatch = useDispatch();
  const history = useNavigate();
  const createAndShowTab = (idtab) => {
    const identifier = `${idtab}-${currentIndex + 1}`;
    dispatch(addNewTab({ id: idtab, lang: 'es' }));
    dispatch(sendActiveViewId(identifier));
    history(`/${identifier}`);
  };

  const handleChange = (event) => {
    onChangeFunction({
      name,
      value: event.target.value,
    });
  };

  return (
    <div className={className}>
      <button
        type="button"
        className="zoomButton"
        onClick={() => {
          createAndShowTab(tableToZoom);
        }}
      >
        <img src={zoomIcon} alt="" />
      </button>
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

export default ZoomListInput;
