import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../api/getUser";
import { getReqSucc, getReqFail } from "../redux/action";

export function* handleGetUser({ payload }) {
  try {
    const response = yield call(requestGetUser, payload);
    const { data } = response;

    yield put(getReqSucc(data));
  } catch (error) {
    yield put(getReqFail(error.message));
  }
}
