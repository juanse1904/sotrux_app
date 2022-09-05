import styled from "styled-components";
import TextInput from "./Input";

export const TextInputStyled = styled(TextInput)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  grid-column: ${(props) => props.columnposition};
  grid-row: ${(props) => props.rowposition};
  width: 100%;
  align-items: center;
  p {
    margin: 0;
    padding-top: 3px;
    font-size: 10px;
    color: #ff4d4d;
  }

  input[type="text"] {
    outline: none;
    width: 100%;
  }
`;
