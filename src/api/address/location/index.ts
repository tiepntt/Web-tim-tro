import API from "../..";

const baseUrl = "/location";
const getAllByProvinceId = (provinceId?: number) => {
  return API.get(`${baseUrl}/getAllByProvince/${provinceId}`);
};
const getAllByDistrictId = (DistrictId: number) => {
  return;
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
export const LocationApi = {
  remove,
  getById,
  create,
  update,
  getAllByDistrictId,
  getAllByProvinceId,
};
