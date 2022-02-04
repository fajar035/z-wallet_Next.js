import { ACTION_STRING } from "./actionString";
// import login from "utils auth login"

const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: login(body)
  };
};

export default loginAction;
