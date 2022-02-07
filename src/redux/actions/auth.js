import { ACTION_STRING } from "./actionString";
import login from "../../modules/auth";

const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: login(body)
  };
};

export default loginAction;
