import styled from 'styled-components';
import NumberInput from './Input';

const NumberInputStyled = styled(NumberInput)`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-column: ${(props) => props.columnposition};
  grid-row: ${(props) => props.rowposition};
  width: 100%;
  padding: 7px 0;
  align-items: center;
  p {
    margin: 0;
    padding-top: 3px;
    font-size: 10px;
    color: #ff4d4d;
  }
  .checkbox-container-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .checkbox-container-right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
  .checkbox-container input[type="checkbox"] {
    margin: 0;
    margin: 0 10px;
  }
  .checkbox-container > p {
    padding: 0;
    color: #979797;
    font-size: 14px;
  }
  .password-container {
    width: calc(100% + 20px);
    display: flex;
    flex-direction: row;
    padding: 14px 0;
  }
  .password-icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 35px;
    padding: 14px 5px;
    border-bottom: 1px solid ${(props) => (props.error ? '#FF4D4D' : '#DCE2F0')};
  }
  .password-eye-icon {
    width: 20px;
  }
  .password-eye-icon:hover {
    cursor: pointer;
    fill: "orange";
  }
  input[type="text"],
  input[type="password"],
  input[type="email"] :focus {
    outline: none;
    width: 100%;
  }
`;
export default NumberInputStyled;
