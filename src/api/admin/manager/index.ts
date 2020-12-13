import API from "../..";

const baseUrl = "/manager";
const getEmployments = (input: {
  take?: number;
  skip?: number;
  key?: string;
  option?: boolean;
}) => {
  return API.get(`${baseUrl}/employments`, { params: input });
};
const createEmployment = () => {};
const assignUserToEmployment = () => {};
const removeUser = () => {};
const getAllNewUser = () => {};
export const ManagerApi = {
  getEmployments,
  assignUserToEmployment,
  removeUser,
  getAllNewUser,
  createEmployment,
};
