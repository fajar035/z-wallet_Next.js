import { ACTION_STRING } from "./actionString";
import { loginApi, logoutApi } from "../../modules/auth";
import { updatePinApi } from "src/modules/user";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: loginApi(body)
  };
};

export const logoutAction = (config) => {
  return {
    type: ACTION_STRING.authLogout,
    payload: logoutApi(config)
  };
};

export const updatePinAction = (id, token, dataPin) => {
  return {
    type: ACTION_STRING.updatePin,
    payload: updatePinApi(id, token, dataPin)
  };
};
