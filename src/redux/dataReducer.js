import * as types from "./types";

const initialState = {
  loading: false,
  hideScreen: false,
  movData: {},
  userInput: "a",
  allProductData: {},
  error: "",
  productDetails: [],
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQ:
      return { ...state, loading: true, error: payload };
    case types.GET_DATA_SUCCESS:
      return { ...state, loading: false, allProductData: payload };
    case types.GET_DATA_FAILED:
      return { ...state, loading: false, error: payload };
    case types.SHOW_SCREEN:
      return { ...state, hideScreen: payload };
    case types.MOV_DATA:
      return { ...state, movData: payload };
    case types.USER_INPUT:
      return { ...state, userInput: payload };

    default:
      return state;
  }
};

export default dataReducer;
