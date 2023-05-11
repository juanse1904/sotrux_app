import { createSlice } from '@reduxjs/toolkit';

const URL = process.env.ERP_API || 'http://localhost:8080';
// Slice
const slice = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    getUserData: (state, action) => ({ ...state, ...action.payload.body }),
  },
});
export default slice.reducer;

// Actions
const { getUserData } = slice.actions;

// Calls
export const userData = () => async (dispatch) => {
  try {
    const data = await fetch(`${URL}/user/initialinfo`);
    const response = await data.json();
    dispatch(getUserData(response)); // payload is the param of the function
    return null;
  } catch (e) {
    return console.error(e.message);
  }
};
