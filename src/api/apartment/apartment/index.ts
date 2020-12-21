import API from "../..";
import { ApartmentInputDto } from "./dto";

const baseUrl = "/apartment";
const create = (input: any) => {
  return API.post(`${baseUrl}/create`, input);
};
const upload = (file: any) => {
  return API.post(`${baseUrl}/upload`, file);
};
const removeImg = (id: any) => {
  return API.delete(`${baseUrl}/upload`, { params: id });
};
const getAll = () => {};
const getAllByUserId = () => {};
const remove = () => {};
const getRemoved = () => {};
const restore = () => {};
const update = (input : ApartmentInputDto) => {
  return API.put("/");
};
export const ApartmentApi = {
  removeImg,
  upload,
  create,
  getAll,
  getAllByUserId,
  remove,
  restore,
  getRemoved,
};
