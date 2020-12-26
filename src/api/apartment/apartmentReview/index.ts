import API from "../..";
import { ApartmentReviewInputDto } from "./dto";

const baseUrl = "/review";
const create = (input: ApartmentReviewInputDto) => {
  return API.post(`${baseUrl}/create`, { review: input });
};
const update = () => {};
const getAllByApartmentId = () => {};
export const ApartmentReviewApi = { create, update, getAllByApartmentId };
