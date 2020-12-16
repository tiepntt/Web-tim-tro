import API from "../..";
import { UserUpdateDto } from "./dto";

const baseUrl = "/user";
const getAll = () => {};
const getById = () => {};
const getInfo = () => {
  return API.get(`${baseUrl}/profile`);
};
const update = (input: UserUpdateDto) => {
  return API.put(`${baseUrl}/update`, { user: input });
};
const changeAvatar = () => {};
export const UserApi = { getAll, getById, changeAvatar, update, getInfo };
