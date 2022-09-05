import React from "react";
import { TextInputStyled } from "../../inputs/textInput/styledInput";
import { ListInputStyled } from "../../inputs/listInput/styledList.jsx";
import { LargeInputStyled } from "../../inputs/largeTextInput/styledInput.jsx";
import { DoubleInputStyled } from "../../inputs/doubleInput/styledDoubleInput.jsx";
import { ZoomListInputStyled } from "../../inputs/zoomListInput/styledList";
import { CheckboxInputStyled } from "../../inputs/checkboxInput/styledInput";
export const inputSwitch = (field) => {
  switch (field.fieldtype) {
    case "inputText": {
      return <TextInputStyled {...field} />;
    }
    case "checkbox": {
      return <CheckboxInputStyled {...field} />;
    }
    case "list": {
      return <ListInputStyled {...field} />;
    }
    case "largeInputText": {
      return <LargeInputStyled {...field} />;
    }

    case "zoomListInputStyled": {
      return <ZoomListInputStyled {...field} />;
    }
    case "double-input": {
      return <DoubleInputStyled {...field} />;
    }
    default:
      return "nothing to show";
  }
};
