import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import { transferReducer } from "./transfer";
import storage from "redux-persist/lib/storage";

const appReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  transfer: transferReducer
});

const rootReducer = (state, action) => {
  if (action.type === "AUTH_LOGOUT_FULFILLED") {
    storage.removeItem("persist:primary");
    console.log("MASUK IF LOGOUT");
    state = undefined;
  }
  return appReducers(state, action);
};

export default rootReducer;
