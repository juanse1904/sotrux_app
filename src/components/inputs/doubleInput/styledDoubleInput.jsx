import styled from "styled-components";
import DoubleInput from "./DoubleInput";

const DoubleInputStyled = styled(DoubleInput)`
  grid-column: ${(props) => props.columnLocation};
  grid-row: ${(props) => props.rowLocation};

  .double-container {
    display: grid;
    grid-template-columns: ${(props) => (props.isDouble ? "60% 10% auto" : "100%")};
    grid-gap: 25px;
  }

  .select-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .double-separator {
    text-align: center;
    font-size: 35px;
    align-self: center;
    justify-self: center;
  }
  .select-section {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .select-value {
    border: 1px solid #dce2f0;
    height: 20px;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
  }
  .select-button-container {
    border: 1px solid #dce2f0;
    border-left: none;
    height: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e9eff4;
    width: 27px;
  }
  .select-arrow-icon {
    width: 15px;
  }

  .select-options-list-close {
    position: absolute;
    width: 100%;
    opacity: 0;
    height: 0;
    background-color: #ffffff;
    border: 1px solid #dce2f0;
    right: 0;
    top: 100%;
    visibility: hidden;
    transition: height 0.4s;
    transition: opacity 0.8s;
  }
`;
export default DoubleInputStyled;
