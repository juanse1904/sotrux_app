export const checkReducer = (store) => (next) => (actionInfo) => {
  console.log("disparando:", actionInfo);
  next(actionInfo);
};
