import { combineReducers } from "redux";
import modalReducer from "./modal";

const combinedReducer = combineReducers({
  modal: modalReducer,
});

export default combinedReducer;
