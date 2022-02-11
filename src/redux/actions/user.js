import { ACTION_STRING } from "src/redux/actions/actionString";
import { getUserApi } from "src/modules/user";

export const getUserAction = (id, token) => {
  return {
    type: ACTION_STRING.dataUser,
    payload: getUserApi(id, token)
  };
};
