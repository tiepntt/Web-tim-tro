import { ContactDto } from "../../../api/user/contactUser/dto";
import { UserInputDto } from "../../../api/user/user/dto";

export const REGISTER_CHANGE_USER = "REGISTER_CHANGE_USER";
const ChangeUserInfo = (key: string, data: any) => {
  return {
    action: REGISTER_CHANGE_USER,
    payload: {
      userInfo: {},
      contact: {},
    },
  };
};
export const ActionRegister = {};
export interface IRegister {
  action: string;
  payload: {
    userInfo: UserInputDto;
    contact: ContactDto;
  };
}
