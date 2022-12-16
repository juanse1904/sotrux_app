import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadCircle from "../../components/loadCircle/LoadCircle";
import TableData from "../table/tableData";
import PaginationController from "./paginationController/PaginationController";
import { inputSwitch } from "./utils/inputSwitch";
import { changeIndexTab } from "../../ducks/tabs";
import { changeModalIndexTab } from "../../ducks/modalData";
import "./dynamotab.css";

const DynamoWin = ({ idTable, isModal }) => {
  let [indexRecord, setIndexRecord] = useState(0);
  let [indexTab, setIndexTab] = useState(0);
  let [tabSelected, setTabSelected] = useState(0);
  const tableType = !isModal ? "Tabs" : "modalTabs";
  const dispatch = useDispatch();
  const isLoading = false;
  const activeTabs = useSelector((state) => state[tableType].activeTabs);
  const currentTab = activeTabs && activeTabs.filter((tab) => tab.idTab === idTable)[0];

  return (
    <>
      {isLoading ? (
        <LoadCircle />
      ) : (
        currentTab &&
        currentTab.subTabs && (
          <div className="work-table">
            <div className="sub-tabs">
              {currentTab.subTabs.map((subtab, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setTabSelected(index);
                    setIndexTab(index);
                    dispatch(
                      isModal
                        ? changeModalIndexTab({ tab_id: idTable, newTabIndex: index })
                        : changeIndexTab({ tab_id: idTable, newTabIndex: index })
                    );
                  }}
                  className={`sub-tabs-item ${tabSelected === index ? "sub-tabs-item-selected" : ""}`}
                >
                  <p>{subtab.name}</p>
                </div>
              ))}
            </div>
            <div className="viewContainer">
              {currentTab.isGrid ? (
                <TableData
                  rows={currentTab.subTabs[indexTab].tableData}
                  headCells={currentTab.subTabs[indexTab].tableHeaders}
                />
              ) : (
                <div className="grid-container">
                  {currentTab.subTabs[indexTab].fields.map((field) => {
                    const value = currentTab.subTabs[indexTab].tableData
                      ? currentTab.subTabs[indexTab].tableData[indexRecord][field.code]
                      : " ";
                    return inputSwitch(field, value);
                  })}
                  <PaginationController
                    handleIndex={setIndexRecord}
                    dataLength={currentTab.subTabs[indexTab].tableData.length}
                    index={indexRecord}
                  />
                </div>
              )}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default DynamoWin;
