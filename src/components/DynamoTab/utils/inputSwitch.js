import React from "react";
import { TextInputStyled } from "../../inputs/textInput/styledInput";
import { ListInputStyled } from "../../inputs/listInput/styledList.jsx";
import { LargeInputStyled } from "../../inputs/largeTextInput/styledInput.jsx";
import { DoubleInputStyled } from "../../inputs/doubleInput/styledDoubleInput.jsx";
import { ZoomListInputStyled } from "../../inputs/zoomListInput/styledList";
import { CheckboxInputStyled } from "../../inputs/checkboxInput/styledInput";
export const inputSwitch = (field, value) => {
  switch (field.fieldtype) {
    case "inputText": {
      return <TextInputStyled {...field} value={value} />;
    }
    case "checkbox": {
      return <CheckboxInputStyled {...field} value={value} />;
    }
    case "list": {
      return <ListInputStyled {...field} value={value} />;
    }
    case "largeInputText": {
      return <LargeInputStyled {...field} value={value} />;
    }

    case "zoomListInputStyled": {
      return <ZoomListInputStyled {...field} value={value} />;
    }
    case "double-input": {
      return <DoubleInputStyled {...field} value={value} />;
    }
    default:
      return "nothing to show";
  }
};
