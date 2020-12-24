import API from "../..";
import { UserAssignDto, UserInputDto } from "../../user/user/dto";

const baseUrl = "/manager";
const getEmployments = (input: {
  take?: number;
  skip?: number;
  key?: string;
  option?: boolean;
}) => {
  return API.get(`${baseUrl}/employments`, { params: input });
};

const createEmployment = (input: UserInputDto) => {
  return API.post(`${baseUrl}/employments/create`, { user: input });
};
const assignUserToEmployment = (input: UserAssignDto) => {
  return API.post(`${baseUrl}/assignUser`, { input: input });
};
const removeUser = () => {};
const getAllNewUser = (input: {
  take: number;
  skip: number;
  isApprove: number;
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
