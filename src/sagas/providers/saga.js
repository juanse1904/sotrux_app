import { takeLatest, put, call } from "redux-saga/effects";

import { CALL_PUBLIC_COPIES } from "../../actions/actionTypes";
import { callPublicCopies } from "../../actions/index";

import { getPublicCopies } from "../../API/backend_helpers";

function* onCallPublicCopies({ payload }) {
  console.log("resquest from sagas", payload);
  try {
    const response = yield call(getPublicCopies, payload.window_id);
    yield put(callPublicCopies({ window_id: payload.window_id, data: response }));
  } catch (error) {
    console.log("error calling copies");
  }
}

function* CartSaga() {
  yield takeLatest(CALL_PUBLIC_COPIES, onCallPublicCopies);
}

export default CartSaga;
