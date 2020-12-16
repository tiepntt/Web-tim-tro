import API from "../..";
import { ContactDto } from "./dto";

const baseUrl = "/contact";
const create = (input?: ContactDto) => {
  return API.post(`${baseUrl}/create`, { contact: input });
};
const getByUserId = () => {};
const update = (input?: ContactDto) => {
  return API.put(`${baseUrl}/update`, { contact: input });
};
const remove = () => {};
export const ContactApi = { create, getByUserId, update, remove };
