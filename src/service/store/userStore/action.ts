import AccountResponseDto from "../../../api/admin/authenticate/dto/accountResponse";


const UserLoginSave = "USER_LOGIN_SAVE";
export const ActionUser = { UserLoginSave };
export const ActionUserDispath = (payload: AccountResponseDto) => {
  return {
    type: UserLoginSave,
    payload: payload.token,
  };
};
