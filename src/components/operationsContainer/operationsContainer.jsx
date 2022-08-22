import React from "react";
import "./opertionsContainer.css";
import newIcon from "../../assets/options-add-icon.svg";
import saveIcon from "../../assets/options-save-icon.svg";
import deleteIcon from "../../assets/options-delete-icon.svg";
import refreshIcon from "../../assets/options-refresh-icon.svg";
import searchIcon from "../../assets/options-search-icon.svg";
import gridIcon from "../../assets/options-grid-icon.svg";
import downloadIcon from "../../assets/options-download-icon.svg";
const OperationsContainer = () => {
  const options = [
    {
      icon: newIcon,
      function: console.log("adding new"),
    },
    {
      icon: saveIcon,
      function: console.log("saving a record"),
    },
    {
      icon: deleteIcon,
      function: console.log("deleting a  record"),
    },
    {
      icon: refreshIcon,
      function: console.log("refresh data"),
    },
    {
      icon: searchIcon,
      function: console.log("search  data from DB"),
    },

    {
      icon: gridIcon,
      function: console.log("switch to grid view"),
    },

    {
      icon: downloadIcon,
      function: console.log("download data"),
    },
  ];
  const ButtonOperation = ({ icon, onclickFunction }) => {
    return (
      <button className="options-button" onClick={() => onclickFunction()}>
        <img src={icon} alt="" className="options-button-icon" />
      </button>
    );
  };
  return (
    <div className="buttons-container">
      {options.map((option, index) => {
        return <ButtonOperation key={index} icon={option.icon} onclickFunction={option.function} />;
      })}
    </div>
  );
};

export default OperationsContainer;
