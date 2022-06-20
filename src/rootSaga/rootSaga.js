import { takeLatest } from "redux-saga/effects";
import { GET_REQ } from "../redux/types";
import { handleGetUser } from "../requestHandler/handler";

export function* watcherSaga() {
  yield takeLatest(GET_REQ, handleGetUser);
}
