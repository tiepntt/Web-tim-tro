import API from "../..";

const baseUrl = "/address/province/";
const getAll = () => {
  return API.get(baseUrl);
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
export const ProvinceApi = { getAll, getById, create, update };
