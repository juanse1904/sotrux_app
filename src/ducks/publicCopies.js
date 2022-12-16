import { createSlice } from "@reduxjs/toolkit";

const URL = process.env.ERP_API || "http://localhost:8080";
// Slice
const slice = createSlice({
  name: "publicCopies",
  initialState: {},
  reducers: {
    getPublicCopies: (state, action) => {
      const copies = {};
      action.payload.response.body.languages.forEach((lang) => {
        const langCopies = {};
        lang.window.tabs[0].fields.forEach((field) => {
          langCopies[field.code] = field.name;
        });
        copies[lang.isocode] = langCopies;
      });
      state[action.payload.window_id] = copies;
    },
  },
});
export default slice.reducer;
// Actions
const { getPublicCopies } = slice.actions;
// Call

export const publicCopies = (window_id) => async (dispatch) => {
  try {
    const data = await fetch(`${URL}/window/public?value=${window_id}`);
    const response = await data.json();
    dispatch(getPublicCopies({ response, window_id }));
  } catch (e) {
    return console.error(e.message);
  }
};
