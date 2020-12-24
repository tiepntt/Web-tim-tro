import API from "../..";
const baseUrl = "/price";
const getAll = () => {
  return API.get(baseUrl);
};
export const PriceApi = { getAll };
