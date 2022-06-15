import * as types from "./types";
import { get } from "axios";

const getDataReq = (payload) => ({ type: types.GET_DATA_REQ, payload });

const getDataSucc = (payload) => ({ type: types.GET_DATA_SUCCESS, payload });

const getDataFail = (payload) => ({ type: types.GET_DATA_FAILED, payload });

const hideScreen = (payload) => ({ type: types.SHOW_SCREEN, payload });

const movScreen = (payload) => ({ type: types.MOV_DATA, payload });

const userInp = (payload) => ({ type: types.USER_INPUT, payload });

const GetData = (num, query = "a") => async (dispatch) => {
  dispatch(getDataReq("loading"));
  try {
    await get(
      `https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=${query}&page=${num}&include_adult=false`
    ).then((res) => {
      dispatch(getDataSucc(res.data));
      console.log(res.data);
    });
  } catch (error) {
    dispatch(getDataFail(error));
  }
};

const ScreenHandeler = (bool) => (dispatch) => {
  dispatch(hideScreen(bool));
};

const movDatahandler = (data) => (dispatch) => {
  dispatch(movScreen(data));
};

const userInputHandeler = (inp) => (dispatch) => {
  dispatch(userInp(inp));
};

export {
  GetData,
  ScreenHandeler,
  movDatahandler,
  userInputHandeler,
  hideScreen,
  movScreen,
  userInp,
};
