import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { addModalTable } from "../../../ducks/modalData";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ArrowIcon from "./arrowIcon";
import zoomIcon from "../../../assets/zoom-icon.svg";
import Modal from "../../ComponentModal/Modal";
export const ZoomListInput = ({ name, options, className, value, onChangeFunction, tableToZoom }) => {
  const [currentValue, setCurrentValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const modalCounter = useSelector((state) => state.modalTabs.tablesCounter);
  const modalIdentifier = `modal-${tableToZoom}-${modalCounter}`;
  const dispatch = useDispatch();
  const togglePopup = async () => {
    await dispatch(addModalTable({ id: tableToZoom, lang: "es" }));
    setIsOpen(!isOpen);
  };

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
      <div className="zoomButton" onClick={togglePopup}>
        <img src={zoomIcon} alt="" />
      </div>
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
      {isOpen && <Modal handleClose={togglePopup} workWin={modalIdentifier} />}
    </div>
  );
};

export default ZoomListInput;
