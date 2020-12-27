import API from "../..";

import { ConditionDto } from "../../apartment/apartment/dto/condtion";
import { ChangePasswordDto, UserUpdateDto } from "./dto";

const baseUrl = "/user";
const getAll = (input: ConditionDto) => {
  return API.get(baseUrl, { params: input });
};
const getById = () => {};
const getInfo = () => {
  return API.get(`${baseUrl}/profile`);
};
const getUserProfileById = (userId: number) => {
  return API.get(`/search/profileUser/${userId}`);
};
const getAccount = (userId: number) => {
  return API.get(`${baseUrl}/account`, { params: { userId } });
};
const update = (input: UserUpdateDto) => {
  return API.put(`${baseUrl}/update`, { user: input });
};
const changePassword = (input: ChangePasswordDto) => {
  return API.put(`${baseUrl}/changePassword`, input);
};
const changeAvatar = (input: any) => {
  return API.put(baseUrl + "/changeAvatar", input);
};
export const UserApi = {
  getAll,
  getById,
  changeAvatar,
  update,
  getInfo,
  getUserProfileById,
  getAccount,
  changePassword,
};
