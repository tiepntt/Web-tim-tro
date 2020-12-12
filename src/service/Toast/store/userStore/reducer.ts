import { ActionStore } from "..";
import AccountResponseDto from "../../../../api/admin/authenticate/dto/accountResponse";
import { LocalStorageService } from "../../../localStorage";
import { ActionUser, IActionUser } from "./action";

const initialState = {
  account: {},
  token: "",
} as AccountResponseDto;
export const UserReducer = (state = initialState, action: IActionUser) => {
  switch (action.type) {
    case ActionUser.UserLoginSave: {
      let newState = { ...state };
      LocalStorageService.save({ key: "token", data: action.payload.token });
      newState = { ...newState, account: action.payload.account };
      return newState;
    }
    default:
      return state;
  }
};
