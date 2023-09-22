import MusicReducer from "./slice/musicSlice";
import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagaFunction from "../saga/saga";

const reducer = combineReducers({
  music: MusicReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore(
  {
    reducer: reducer,
    middleware: [sagaMiddleware]
  }
);
sagaMiddleware.run(sagaFunction);
