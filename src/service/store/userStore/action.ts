import AccountResponseDto from "../../../api/admin/authenticate/dto/accountResponse";

const UserLoginSave = "USER_LOGIN_SAVE";
const UserLogOut = "USER_LOGOUT";
const USER_CHANGE_AVATAR = "USER_CHANGE_AVATAR";
export const ActionUser = { UserLoginSave, UserLogOut, USER_CHANGE_AVATAR };
export const ActionUserDispatch = (payload: AccountResponseDto) => {
  return {
    type: UserLoginSave,
    payload: payload,
  };
};
export const ActionUserLogout = () => {
  return {
    type: UserLogOut,
  };
};
export const ActionChangeAvatar = (avatar: any) => {
  return {
    type: USER_CHANGE_AVATAR,
    payload: avatar,
  };
};

export interface IActionUser {
  type: string;
  payload: any;
}
