import { createSlice } from "@reduxjs/toolkit";

// Slice
const slice = createSlice({
  name: "activeView",
  initialState: { idView: "" },
  reducers: {
    updateViewId: (state, action) => {
      state.idView = action.payload;
    },
  },
});
export default slice.reducer;
// Actions
const { updateViewId } = slice.actions;
// Call

export const sendActiveViewId = (window_id) => async (dispatch) => {
  console.log("in the send active view id", window_id);
  dispatch(updateViewId(window_id));
};
