import AccountResponseDto from "../../../api/admin/authenticate/dto/accountResponse";

const UserLoginSave = "USER_LOGIN_SAVE";

export const ActionUser = { UserLoginSave };
export const ActionUserDispatch = (payload: AccountResponseDto) => {
  return {
    type: UserLoginSave,
    payload: payload,
  };
};
export interface IActionUser {
  type: string;
  payload: any;
}
