import { ACTION_STRING } from "./actionString";

export const transferDetailAction = (data) => {
  return {
    type: ACTION_STRING.transfer,
    payload: data
  };
};
