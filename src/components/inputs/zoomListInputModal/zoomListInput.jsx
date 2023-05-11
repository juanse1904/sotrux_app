import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { addModalTable } from '../../../ducks/modalData';
import ArrowIcon from './arrowIcon';
import zoomIcon from '../../../assets/zoom-icon.svg';
import Modal from '../../ComponentModal/Modal';

export const ZoomListInput = ({
  name, options, className, value, onChangeFunction, tableToZoom,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalCounter = useSelector((state) => state.modalTabs.tablesCounter);
  const modalIdentifier = `modal-${tableToZoom}-${modalCounter}`;
  const dispatch = useDispatch();
  const togglePopup = async () => {
    await dispatch(addModalTable({ id: tableToZoom, lang: 'es' }));
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    onChangeFunction({
      name,
      value: event.target.value,
    });
  };

  return (
    <div className={className}>
      <button type="button" className="zoomButton" onClick={togglePopup}>
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
      {isOpen && <Modal handleClose={togglePopup} workWin={modalIdentifier} />}
    </div>
  );
};

export default ZoomListInput;
