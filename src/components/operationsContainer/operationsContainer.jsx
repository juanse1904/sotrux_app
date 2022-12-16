import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CSVLink } from "react-csv";
import { updateViewTab } from "../../ducks/tabs";
import "./opertionsContainer.css";

const OperationsContainer = () => {
  const dispatch = useDispatch();
  const activeView = useSelector((state) => state.activeView.idView);
  const tableInView = useSelector((state) => state.Tabs.activeTabs).filter((tab) => tab.idTab === activeView)[0];
  const importData = tableInView ? tableInView.subTabs[tableInView.indexTab].tableData : [];
  const isGrid = false;
  const options = [
    {
      icon: "new",
      function: () => {
        console.log("adding new");
      },
    },
    {
      icon: "save",
      function: () => {
        console.log("saving a record");
      },
    },
    {
      icon: "delete",
      function: () => {
        console.log("deleting a  record");
      },
    },
    {
      icon: "refresh",
      function: console.log("refresh data"),
    },
    {
      icon: "search",
      function: () => console.log("search  data from DB"),
    },

    {
      icon: "grid",
      function: () => {
        dispatch(updateViewTab(activeView));
      },
    },

    {
      icon: "export",
      function: console.log("download data"),
    },
  ];
  const ButtonOperation = ({ icon, onclickFunction }) => {
    return (
      <button
        className={`options-button ${isGrid && icon === "grid" ? "options-button-disabled" : ""}`}
        onClick={onclickFunction}
      >
        <span className={`ico icon-icon-${icon} operation-icon`}></span>
      </button>
    );
  };
  return (
    <div className="buttons-container">
      {options.map((option, index) => {
        if (option.icon === "export") {
          return (
            <CSVLink data={importData} filename={`${activeView}-sotrux.csv`} className="import-button">
              <ButtonOperation key={index} icon={option.icon} onclickFunction={option.function} />
            </CSVLink>
          );
        }
        return <ButtonOperation key={index} icon={option.icon} onclickFunction={option.function} />;
      })}
    </div>
  );
};

export default OperationsContainer;
