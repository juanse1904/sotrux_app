const checkReducer = (store) => (next) => (actionInfo) => {
  console.log('disparando:', actionInfo, store);
  next(actionInfo);
};

export default checkReducer;
