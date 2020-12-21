import API from "../..";

const baseUrl = "/apartment/detail";
const create = (input: any) => {
  return API.post(`${baseUrl}/create`, input);
};

const getByApartmentId = () => {};
const remove = () => {};
export const ApartmentDetailApi = { create, getByApartmentId, remove };
