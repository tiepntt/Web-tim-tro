import API from "../..";
import { UserAssignDto } from "../../user/user/dto";

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
const assignUserToEmployment = (input: UserAssignDto) => {
  return API.post(`${baseUrl}/assignUser`, { input: input });
};
const removeUser = () => {};
const getAllNewUser = (input: {
  take: number;
  skip: number;
  isApprove: boolean;
}) => {
  return API.get(`${baseUrl}/newOwner`, { params: input });
};
export const ManagerApi = {
  getEmployments,
  assignUserToEmployment,
  removeUser,
  getAllNewUser,
  createEmployment,
};
