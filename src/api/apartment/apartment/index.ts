import API from "../..";
import { ApartmentInputDto } from "./dto";

const baseUrl = "/apartment";
const create = (input: any) => {
  return API.post(`${baseUrl}/create`, input);
};
const upload = (file: any) => {
  return API.post(`${baseUrl}/upload`, file);
};
const getAll = (input: {
  take?: number;
  skip?: number;
  isApprove?: boolean;
  key?: string;
}) => {
  return API.get(`${baseUrl}/all`, { params: input });
};
const removeImg = (id: any) => {
  return API.delete(`${baseUrl}/upload`, { params: id });
};
const getAllByUserId = () => {};
const getAllApartmentByUserId = (input: {
  take: number;
  skip: number;
  isApprove: boolean;
  key: string;
}) => {
  return API.get(`${baseUrl}/allOfUser`, { params: input });
};
const remove = () => {};
const getRemoved = () => {};
const restore = () => {};
const update = (input: ApartmentInputDto) => {
  return API.put("/");
};
const changeStatus = (id?: number) => {
  return API.put(`${baseUrl}/updateStatus`, { apartmentId: id });
};
const extendApartment = (apartmentId?: number, postPriceId?: number) => {
  return API.put(`${baseUrl}/extend`, { apartmentId, postPriceId });
};
const saveToHobby = (apartmentId?: number) => {
  return API.post(`${baseUrl}/hobby`, { apartmentId });
};
const removeHobby = (apartmentId?: number) => {
  return API.delete(`${baseUrl}/hobby/` + apartmentId);
};
const getHobby = (input: { take: number; skip: number; key: string }) => {
  return API.get(`${baseUrl}/hobby`, { params: input });
};
export const ApartmentApi = {
  removeHobby,
  removeImg,
  upload,
  create,
  getAll,
  getAllByUserId,
  getHobby,
  remove,
  restore,
  getRemoved,
  update,
  getAllApartmentByUserId,
  changeStatus,
  saveToHobby,
  extendApartment,
};
