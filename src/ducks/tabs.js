import { createSlice } from "@reduxjs/toolkit";

const URL = process.env.ERP_API || "http://localhost:8080";
// Slice
const slice = createSlice({
  name: "tabs",
  initialState: { tablesCounter: 0, activeTabs: [] },
  reducers: {
    createNewTab: (state, action) => {
      const newSubTabs = action.payload.shape.body.tabs.map((subTab) => {
        const headers = subTab.fields;
        const tableHeaders = [];
        headers.forEach((header) => {
          const objectHeader = {
            id: header.code,
            numeric: header.fieldtype === "numericInputText",
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
        idTab: `${action.payload.window_data.id}-${state.tablesCounter + 1}`,
        isGrid: false,
        indexTab: 0,
        name: action.payload.shape.body.name,
        subTabs: newSubTabs,
      };
      state["activeTabs"] = [...state["activeTabs"], newTab];
      state.tablesCounter = state.tablesCounter + 1;
    },
    changeViewTab: (state, action) => {
      state["activeTabs"] = state["activeTabs"].map((tab) => {
        if (tab.idTab === action.payload) {
          return {
            ...tab,
            isGrid: !tab.isGrid,
          };
        } else {
          return tab;
        }
      });
    },
    updateIndexTab: (state, action) => {
      state["activeTabs"] = state["activeTabs"].map((tab) => {
        if (tab.idTab === action.payload.tab_id) {
          return {
            ...tab,
            indexTab: action.payload.newTabIndex,
          };
        } else {
          return tab;
        }
      });
    },
    deleteActiveTab: (state, action) => {
      const newTabs = state.activeTabs.filter((tab) => tab.idTab !== action.payload);
      state.activeTabs = newTabs;
    },
  },
});
export default slice.reducer;
// Actions
const { createNewTab, updateIndexTab, changeViewTab, deleteActiveTab } = slice.actions;
// Call

export const addNewTab = (window_data) => async (dispatch) => {
  try {
    const callShape = await fetch(`${URL}/window?window=${window_data.id}&language=${window_data.lang}`);
    const shape = await callShape.json();
    const callData = await fetch(`${URL}/window/data?window=${window_data.id}&language=${window_data.lang}`);
    const data = await callData.json();
    dispatch(createNewTab({ shape, data, window_data }));
  } catch (e) {
    return console.error(e.message);
  }
};

export const changeIndexTab = (window_data) => (dispatch) => {
  dispatch(updateIndexTab(window_data));
};
export const updateViewTab = (window_id) => (dispatch) => {
  dispatch(changeViewTab(window_id));
};
export const removeActiveTab = (window_id) => (dispatch) => {
  dispatch(deleteActiveTab(window_id));
};
