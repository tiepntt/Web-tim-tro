import AccountResponseDto from "../../../api/admin/authenticate/dto/accountResponse";

const UserLoginSave = "USER_LOGIN_SAVE";
const UserLogOut  = "USER_LOGOUT"
export const ActionUser = { UserLoginSave,UserLogOut };
export const ActionUserDispatch = (payload: AccountResponseDto) => {
  return {
    type: UserLoginSave,
    payload: payload,
  };
};
export  const ActionUserLogout = () => {
  return {
    type : UserLogOut
  }
}
export interface IActionUser {
  type: string;
  payload: any;
}
