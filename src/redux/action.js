import * as types from "./types.js";

export const getReq = (payload) => ({ type: types.GET_REQ, payload });

export const getReqSucc = (payload) => ({ type: types.GET_REQ_SUCC, payload });

export const getReqFail = (payload) => ({ type: types.GET_REQ_FAIL, payload });

export const getUserInp = (payload) => ({ type: types.USER_INPUT, payload });

export const screen = (payload) => ({ type: types.SCREEN, payload });

export const pageNum = (payload) => ({ type: types.PAGE_NUM, payload });

// export const getData = () => async (dispatch) => {
//   dispatch(getReq("loading"));
//   try {
//     const resp = await get(
//       "https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=a&page=2&include_adult=false"
//     );
//     const { data } = resp;

//     dispatch(getReqSucc(data));
//   } catch (error) {
//     dispatch(getReqFail(error));
//   }
// };
