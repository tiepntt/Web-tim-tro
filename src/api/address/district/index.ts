import API from "../..";

const baseUrl = "/district/";

const getAllByProvinceId = (provinceId?: number) => {
  return API.get(baseUrl + "getAll/" + provinceId);
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
export const DistrictApi = {
  remove,
  getById,
  create,
  update,
  getAllByProvinceId,
};
