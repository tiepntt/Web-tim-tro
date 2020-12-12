import { ActionStore } from "..";
import { LocalStorageService } from "../../localStorage";
import { ActionUser } from "./action";

const initialState = {
  token: "",
};
export const UserReducer = (state = initialState, action: ActionStore) => {
  switch (action.type) {
    case ActionUser.UserLoginSave: {
      LocalStorageService.save({ key: "token", data: action.payload });
      return state;
    }
    default:
      return state;
  }
};
