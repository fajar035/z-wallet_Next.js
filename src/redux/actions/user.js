import { ACTION_STRING } from "src/redux/actions/actionString";
import { getUserIdApi } from "src/modules/user";

export const getUserAction = (id, token) => {
  return {
    type: ACTION_STRING.dataUser,
    payload: getUserIdApi(id, token)
  };
};

export const updateUserAction = (id, token) => {
  return {
    type: ACTION_STRING.updateUser,
    payload: getUserIdApi(id, token)
  };
};
