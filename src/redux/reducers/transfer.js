import { ACTION_STRING } from "../actions/actionString";

const initialState = {
  dataTransfer: null
};

export const transferReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION_STRING.transfer:
      const data = action.payload;
      console.log(action);
      return {
        ...data
      };

    default:
      return prevState;
  }
};
