import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateViewTab } from "../../ducks/tabs";
import "./opertionsContainer.css";
import newIcon from "../../assets/options-add-icon.svg";
import saveIcon from "../../assets/options-save-icon.svg";
import deleteIcon from "../../assets/options-delete-icon.svg";
import refreshIcon from "../../assets/options-refresh-icon.svg";
import searchIcon from "../../assets/options-search-icon.svg";
import gridIcon from "../../assets/options-grid-icon.svg";
import downloadIcon from "../../assets/options-download-icon.svg";
const OperationsContainer = () => {
  const dispatch = useDispatch();
  const activeView = useSelector((state) => state.activeView.idView);
  const tableInView = useSelector((state) => state.Tabs.activeTabs).filter((tab) => tab.idTab === activeView)[0];
  console.log("table in view insied operator", tableInView);
  const isGrid = false;
  const options = [
    {
      icon: newIcon,
      function: () => {
        console.log("adding new");
      },
    },
    {
      icon: saveIcon,
      function: () => {
        console.log("saving a record");
      },
    },
    {
      icon: deleteIcon,
      function: () => {
        console.log("deleting a  record");
      },
    },
    {
      icon: refreshIcon,
      function: console.log("refresh data"),
    },
    {
      icon: searchIcon,
      function: () => console.log("search  data from DB"),
    },

    {
      icon: gridIcon,
      function: () => {
        dispatch(updateViewTab(activeView));
      },
    },

    {
      icon: downloadIcon,
      function: console.log("download data"),
    },
  ];
  const ButtonOperation = ({ icon, onclickFunction }) => {
    return (
      <button
        className={`options-button ${isGrid && icon === gridIcon ? "options-button-disabled" : ""}`}
        onClick={onclickFunction}
      >
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
