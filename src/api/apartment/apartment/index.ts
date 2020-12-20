import API from "../..";
import { ApartmentInputDto } from "./dto";

const baseUrl = "/apartment";
const create = (input: any) => {
  return API.post(`${baseUrl}/create`, input);
};
const getAll = () => {};
const getAllByUserId = () => {};
const remove = () => {};
const getRemoved = () => {};
const restore = () => {};
export const ApartmentApi = {
  create,
  getAll,
  getAllByUserId,
  remove,
  restore,
  getRemoved,
};
