import API from "../..";

const baseUrl = "/user";
const getAll = () => {};
const getById = () => {};
const getInfo = () => {
  return API.get(`${baseUrl}/profile`);
};
const update = () => {};
const changeAvatar = () => {};
export const UserApi = { getAll, getById, changeAvatar, update, getInfo };
