import styled from 'styled-components';
import { ZoomListInput } from './zoomListInput';

const ZoomListInputStyled = styled(ZoomListInput)`
  display: flex;
  flex-direction: row;
  grid-column: ${(props) => props.columnposition};
  grid-row: ${(props) => props.rowposition};

  .zoomButton {
    height: 55px;
    width: 55px;
    background: #f4f7f9;
    border: 1px solid #e9eff4;
    border-radius: 4px 0 0 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default ZoomListInputStyled;
