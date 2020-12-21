import API from "../..";
import { condition, ConditionDto } from "../apartment/dto/condtion";
const baseUrl = "/search";
const search = (input = condition as ConditionDto) => {
  return API.get(baseUrl, { params: input });
};
export const SearchAPI = { search };
