import { all, fork } from "redux-saga/effects";
import CartSaga from "./providers/saga";

export default function* rootSaga() {
  yield all([fork(CartSaga)]);
}
