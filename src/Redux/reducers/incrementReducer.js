import { DECREMENT_COUNT, INCREMENT_COUNT, RESET_COUNT } from "../constants/counterType";

const initialState = 0;
export const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return (state = state + 1);
    case DECREMENT_COUNT:
      return (state = state - 1);
    case RESET_COUNT:
      return (0);

    default:
      return state;
  }
};
