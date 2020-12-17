import { NumberLiteralType } from "typescript";
import API from "../..";

const baseUrl = "/ward";

const getAllByDistrictId = (DistrictId?: number) => {
  return API.get(`${baseUrl}/getAll/${DistrictId}`);
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
export const WardApi = {
  remove,
  getById,
  create,
  update,
  getAllByDistrictId,
};
