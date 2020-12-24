
import API from "../..";

const baseUrl = "/street/";

const getAllByDistrictId = (DistrictId?: number) => {
  return API.get(`${baseUrl}getAll/${DistrictId}`);
};
const getById = (id: number) => {
  return;
};
const create = (input: any) => {
  return;
};
const update = (input: any) => {
  return;
};
const remove = () => {
  return;
};
export const StreetApi = {
  remove,
  getById,
  create,
  update,
  getAllByDistrictId,
};
