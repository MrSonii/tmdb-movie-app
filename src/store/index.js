import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../redux/dataReducer";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
