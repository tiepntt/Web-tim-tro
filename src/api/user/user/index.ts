import API from "../..";
import { User } from "../../../components/Profile/User";
import { UserUpdateDto } from "./dto";

const baseUrl = "/user";
const getAll = () => {};
const getById = () => {};
const getInfo = () => {
  return API.get(`${baseUrl}/profile`);
};
const getAccount = (userId: number) => {
  return API.get(`${baseUrl}/account`, { params: { userId } });
};
const update = (input: UserUpdateDto) => {
  return API.put(`${baseUrl}/update`, { user: input });
};
const changeAvatar = () => {};
export const UserApi = {
  getAll,
  getById,
  changeAvatar,
  update,
  getInfo,
  getAccount,
};
