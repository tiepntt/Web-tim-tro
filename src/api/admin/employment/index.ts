import API from "../..";
import { ConditionDto } from "../../apartment/apartment/dto/condtion";

const baseUrl = "/employment";
const approveApartment = (id?: number) => {
  return API.post(`${baseUrl}/approve`, { apartmentId: id });
};
const getUserOfEmployment = (input: ConditionDto) => {
  return API.get(`${baseUrl}/getUsers/`, { params: input });
};
const getMaxApartment = (input: { take: number }) => {
  return API.get(`${baseUrl}/max/`, { params: input });
};
const getAllApartmentApproveYet = () => {};
const getAllReviewApartmentApproveYet = () => {};
const getAllReviewApproveYetByApartmentId = () => {};
const approveReview = () => {};

const getReportByUserId = () => {};
const removeApartment = () => {};
const getAllApartmentApproveByUser = () => {};
const restoreApartment = () => {};
export const EmploymentAPI = {
  getUserOfEmployment,
  getAllApartmentApproveYet,
  approveApartment,
  getAllReviewApartmentApproveYet,
  getAllReviewApproveYetByApartmentId,
  approveReview,
  getReportByUserId,
  removeApartment,
  getAllApartmentApproveByUser,
  restoreApartment,
  getMaxApartment,
};
