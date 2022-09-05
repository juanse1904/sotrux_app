import { createSlice } from "@reduxjs/toolkit";

const URL = process.env.ERP_API || "http://localhost:8080";
// Slice
const slice = createSlice({
  name: "modalTabs",
  initialState: { tablesCounter: 0, activeTabs: [] },
  reducers: {
    createModalTable: (state, action) => {
      const newTab = {
        tableCount: state.tablesCounter + 1,
        idTab: `modal-${action.payload.window_data.id}-${state.tablesCounter + 1}`,
        isGrid: false,
        indexTab: 0,
        name: action.payload.shape.body.name,
        subTabs: action.payload.shape.body.tabs,
      };
      state["activeTabs"] = [...state["activeTabs"], newTab];
      state.tablesCounter = state.tablesCounter + 1;
    },
    updateModalIndexTab: (state, action) => {
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
  },
});
export default slice.reducer;
// Actions
const { createModalTable, updateModalIndexTab } = slice.actions;
// Call

export const addModalTable = (window_data) => async (dispatch) => {
  try {
    const data = await fetch(`${URL}/window?window=${window_data.id}&language=${window_data.lang}`);
    const shape = await data.json();
    dispatch(createModalTable({ shape, window_data }));
  } catch (e) {
    return console.error(e.message);
  }
};

export const changeModalIndexTab = (window_data) => (dispatch) => {
  dispatch(updateModalIndexTab(window_data));
};
