import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInputStyled } from "../inputs/textInput/styledInput";
import DoubleInputStyled from "../inputs/doubleInput/styledDoubleInput";
import ListInputStyled from "../inputs/listInput/styledList";
import "./dynamotab.css";

const DynamoWin = ({ idTable }) => {
  let [index, setIndex] = useState(0);
  let [tabSelected, setTabSelected] = useState(0);

  const id = idTable * 1;

  const tableDataState = useSelector((state) => state.dynamoTables.filter((table) => table.id === id)[0]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
  };

  const inputElement = (input) => {
    switch (input.input) {
      case "Input": {
        return (
          <TextInputStyled
            {...input}
            value={tableDataState.tableData[index][input.key]}
            onChangeFunction={handleChange}
          />
        );
      }
      case "List": {
        return (
          <ListInputStyled
            {...input}
            tableId={id}
            value={tableDataState.tableData[index][input.key]}
            onChangeFunction={handleChange}
          />
        );
      }
      case "double-input": {
        return (
          <DoubleInputStyled
            {...input}
            value={tableDataState.tableData[index][input.key]}
            onChangeFunction={handleChange}
          />
        );
      }
      default:
        return "nothing to show";
    }
  };

  return (
    tableDataState.tableData &&
    tableDataState.tableShape.inputs &&
    tableDataState.tableShape.subTabs && (
      <>
        <div className="work-table">
          <div className="sub-tabs">
            {tableDataState.tableShape.subTabs.map((subtab, index) => (
              <div
                key={index}
                onClick={() => {
                  setTabSelected(index);
                }}
                className={`sub-tabs-item ${tabSelected === index ? "sub-tabs-item-selected" : ""}`}
              >
                <p>{subtab.name}</p>
              </div>
            ))}
          </div>
          <div className="grid-container">
            {tableDataState.tableShape.inputs.map((input) => {
              return inputElement(input);
            })}
          </div>
        </div>
        <input
          type="button"
          value="< Prev"
          onClick={() => {
            setIndex(index === 0 ? 0 : index - 1);
          }}
        />
        <input
          type="button"
          value="Next >"
          onClick={() => {
            setIndex(index >= tableDataState.tableData.length - 1 ? tableDataState.tableData.length - 1 : index + 1);
          }}
        />
      </>
    )
  );
};

export default DynamoWin;
