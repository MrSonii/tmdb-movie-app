import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { dataReducer } from "../dataReducer";
import createSagaMiddleware from "@redux-saga/core";

import { watcherSaga } from "../../rootSaga/rootSaga";

const reducer = combineReducers({ data: dataReducer });
const sagaMiddleWare = createSagaMiddleware();

const composeEnahancer =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducer,
  composeEnahancer(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(watcherSaga);
