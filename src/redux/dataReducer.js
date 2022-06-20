import * as types from "./types.js";

const initialState = {
  error: "",
  loading: false,
  apiData: {},
  screen: false,
  userInput: "a",
  pageNum: 1,
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_REQ:
      return {
        ...state,
        loading: true,
      };
    case types.GET_REQ_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.GET_REQ_SUCC:
      return {
        ...state,
        loading: false,
        apiData: payload,
      };
    case types.USER_INPUT:
      return {
        ...state,
        userInput: payload,
      };
    case types.SCREEN:
      return {
        ...state,
        screen: payload,
      };
    case types.PAGE_NUM:
      return {
        ...state,
        pageNum: payload,
      };

    default:
      return state;
  }
};
