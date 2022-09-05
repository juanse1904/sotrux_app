import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadCircle from "../../components/loadCircle/LoadCircle";
import TableData from "../table/tableData";
import { inputSwitch } from "./utils/inputSwitch";
import { changeModalIndexTab } from "../../ducks/modalData";
import "./dynamotab.css";

const DynamoWin = ({ idTable, isModal }) => {
  let [indexRecord, setIndexRecord] = useState(0);
  let [indexTab, setIndexTab] = useState(0);
  let [tabSelected, setTabSelected] = useState(0);
  const tableType = !isModal ? "Tabs" : "modalTabs";
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const activeTabs = useSelector((state) => state[tableType].activeTabs);
  const currentTab = activeTabs && activeTabs.filter((tab) => tab.idTab === idTable)[0];
  console.log("current tab from the dynamic tab", activeTabs, currentTab, idTable);

  const tableDataState = {
    tableData: {
      title: "proovedores",
      records: [
        {
          name: "proovedor SA 1",
          address: "calle 34 F # 125 - 45",
          active: false,
          risk: "moderado",
          nit: { v1: "32758340", v2: "341" },
        },
        {
          name: "consorcio Ltda",
          address: "Av 127 F # 14A - 32",
          active: false,
          risk: "alto",
          nit: { v1: "32758340", v2: "341" },
        },
        {
          name: "Acme Corp",
          address: "carrera 72 # 12 - 95",
          active: true,
          risk: "muy alto",
          nit: { v1: "32758340", v2: "341" },
        },
        {
          name: "Stark Industries",
          address: "Cr 80 No. 37-56",
          active: false,
          risk: "bajo",
          nit: { v1: "32758340", v2: "341" },
        },
        {
          name: "Olivanders",
          address: "Cr 13 No. 64-97",
          active: false,
          risk: "bajo",
          nit: { v1: "32758340", v2: "341" },
        },
        {
          name: "Gekko & Co",
          address: "Cr 80 No. 37-56",
          active: false,
          risk: "bajo",
          nit: { v1: "32758340", v2: "341" },
        },
      ],
    },
    tableShape: {
      subTabs: [
        {
          name: "tab1",
        },
        {
          name: "tab2",
        },
        {
          name: "tab3",
        },
        {
          name: "tab4",
        },
      ],
      inputs: [
        {
          input: "Input",
          type: "text",
          key: "name",
          name: "name",
          placeHolder: "Escriba su nombre",
          columnLocation: "1 / 7",
          rowLocation: "1",
          isRequired: true,
        },
        {
          input: "Input",
          type: "text",
          key: "address",
          name: "address",
          placeHolder: "Escriba su dirección",
          columnLocation: "7 / 13",
          rowLocation: "1",
          isRequired: true,
        },
        {
          input: "Input",
          type: "checkbox",
          key: "active",
          name: "active",
          placeHolder: "proovedor en espera",
          columnLocation: "1/7",
          rowLocation: "2",
          isRequired: false,
        },
        {
          input: "List",
          type: "",
          name: "riesgo",
          key: "risk",
          options: [
            { value: "bajo", change: false },
            { value: "moderado", change: true },
            { value: "medio", change: true },
            { value: "alto", change: true },
            { value: "muy alto", change: true },
          ],
          changeKey: "nit",
          placeHolder: "Escriba su dirección",
          columnLocation: "7/13",
          rowLocation: "2",
          isRequired: false,
        },
        {
          input: "double-input",
          type: "doubleInput",
          name: "nit",
          isDouble: true,
          key: "nit",
          placeHolder1: "Documento",
          placeHolder2: "Código",
          columnLocation: "1/7",
          rowLocation: "3",
          isRequired: false,
        },
      ],
    },
  };
  return (
    <>
      {isLoading ? (
        <LoadCircle />
      ) : (
        currentTab && (
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
                <TableData />
              ) : (
                <div className="grid-container">
                  {currentTab.subTabs[indexTab].fields.map((field) => {
                    return inputSwitch(field);
                  })}
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
