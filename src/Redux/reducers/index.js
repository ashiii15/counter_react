import { combineReducers } from "redux";
import { incrementReducer } from "./incrementReducer";

export const reducers =combineReducers({
    incrementCounter :incrementReducer
})