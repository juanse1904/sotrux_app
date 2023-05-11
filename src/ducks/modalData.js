/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const URL = process.env.ERP_API || 'http://localhost:8080';
// Slice
const slice = createSlice({
  name: 'modalTabs',
  initialState: { tablesCounter: 0, activeTabs: [] },
  reducers: {
    createModalTable: (state, action) => {
      const newSubTabs = action.payload.shape.body.tabs.map((subTab) => {
        const headers = subTab.fields;
        const tableHeaders = [];
        headers.forEach((header) => {
          const objectHeader = {
            id: header.code,
            numeric: header.fieldtype === 'numericInputText',
            disablePadding: false,
            label: header.name,
          };
          tableHeaders.push(objectHeader);
        });
        return {
          ...subTab,
          tableHeaders,
          tableData: action.payload.data.body.data,
        };
      });
      const newTab = {
        tableCount: state.tablesCounter + 1,
        idTab: `modal-${action.payload.windowData.id}-${state.tablesCounter + 1}`,
        isGrid: false,
        indexTab: 0,
        name: action.payload.shape.body.name,
        subTabs: newSubTabs,
      };
      state.activeTabs = [...state.activeTabs, newTab];
      state.tablesCounter += 1;
    },
    updateModalIndexTab: (state, action) => {
      state.activeTabs = state.activeTabs.map((tab) => {
        if (tab.idTab === action.payload.tab_id) {
          return {
            ...tab,
            indexTab: action.payload.newTabIndex,
          };
        }
        return tab;
      });
    },
  },
});
export default slice.reducer;
// Actions
const { createModalTable, updateModalIndexTab } = slice.actions;
// Call

export const addModalTable = (windowData) => async (dispatch) => {
  try {
    const callShape = await fetch(`${URL}/window?window=${windowData.id}&language=${windowData.lang}`);
    const shape = await callShape.json();
    const callData = await fetch(`${URL}/window/data?window=${windowData.id}&language=${windowData.lang}`);
    const data = await callData.json();
    dispatch(createModalTable({ shape, data, windowData }));
    return null;
  } catch (e) {
    return console.error(e.message);
  }
};

export const changeModalIndexTab = (windowData) => (dispatch) => {
  dispatch(updateModalIndexTab(windowData));
};
