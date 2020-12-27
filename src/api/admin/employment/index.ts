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
const getAllReviewApartmentApproveYet = (input?: {
  take: number;
  skip: number;
  key: string;
}) => {
  return API.get(`${baseUrl}/reviews`, { params: input });
};
const getAllApartmentApproveYet = () => {};

const getAllReviewApproveYetByApartmentId = () => {};
const approveReview = (reviewId: number) => {
  return API.post(`${baseUrl}/reviews/approve`, { reviewId: reviewId });
};
const removeReview = (reviewId: number) => {
  return API.delete(`${baseUrl}/reviews/remove/${reviewId}`);
};
const approveReport = (reportId: number) => {
  return API.post(`${baseUrl}/report/approve`, { reportId: reportId });
};
const removeReport = (reportId: number) => {
  return API.delete(`${baseUrl}/report/remove/${reportId}`);
};
const getListNew = () => {
  return API.get(baseUrl + "/listnew");
};
const getAllReportApartmentApproveYet = (input?: {
  take: number;
  skip: number;
  key: string;
}) => {
  return API.get(`${baseUrl}/reports`, { params: input });
};
const removeApartment = () => {};
const getAllApartmentApproveByUser = () => {};
const restoreApartment = () => {};
export const EmploymentAPI = {
  getUserOfEmployment,
  getListNew,
  getAllApartmentApproveYet,
  approveApartment,
  getAllReviewApartmentApproveYet,
  getAllReportApartmentApproveYet,
  getAllReviewApproveYetByApartmentId,
  approveReport,
  removeReport,
  approveReview,
  removeReview,
  removeApartment,
  getAllApartmentApproveByUser,
  restoreApartment,
  getMaxApartment,
};
