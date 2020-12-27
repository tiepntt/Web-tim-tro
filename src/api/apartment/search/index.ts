import API from "../..";
import { condition, ConditionDto } from "../apartment/dto/condtion";
const baseUrl = "/search";
const search = (input = condition as ConditionDto) => {
  return API.get(baseUrl, { params: input });
};
const getCountByType = () => {
  return API.get(baseUrl + "/listCountByType");
};
const getCountByDistrict = () => {
  return API.get(baseUrl + "/listCountByDistrict");
};
export const SearchAPI = { search, getCountByType, getCountByDistrict };
