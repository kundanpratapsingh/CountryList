import { combineReducers } from "redux";
import loggedReducer from "./loggedReducer";

const rootReducer = combineReducers({
  user: loggedReducer,
});

export default rootReducer;
