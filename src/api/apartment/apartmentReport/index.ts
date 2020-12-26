import API from "../..";

const baseUrl = "/report";
const create = (apartmentId?: number) => {
  return API.post(baseUrl, { apartmentId });
};
const getById = () => {};
export const ApartmentReportApi = { create, getById };
