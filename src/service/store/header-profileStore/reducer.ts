import { NAV_F_CHANGE_TYPE } from "./action";

const initalState = {
  type: "user",
};
export const headerReducer = (
  state = initalState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
      case NAV_F_CHANGE_TYPE:
          
      break;
    default:
      return state;
  }
};
