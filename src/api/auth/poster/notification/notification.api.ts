import API from "../../../index";
const baseUrl = "poster/notifications";

const getAll = (take: number, skip: number) => {
  return API.get(`${baseUrl}/skip=${skip}&take=${take}`);
};
export const NotificationApi = { getAll };
