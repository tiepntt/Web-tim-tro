import API from "../..";

const baseUrl = "/type";
const getAllApartmentType = () => {
  return API.get(`${baseUrl}/apartment`);
};
const getAllKitchenType = () => {
  return API.get(`${baseUrl}/kitchen`);
};
const getAllToiletType = () => {
  return API.get(`${baseUrl}/toilet`);
};
export const TypeApi = {
  getAllApartmentType,
  getAllKitchenType,
  getAllToiletType,
};
