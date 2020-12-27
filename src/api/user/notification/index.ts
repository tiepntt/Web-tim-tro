import API from "../..";

const baseUrl = "/notification";
const getAll = (input: { take: number; skip: number }) => {
  return API.get(`${baseUrl}/getAll`, { params: input });
};
const getNews = () => {
  return API.get(`${baseUrl}/getNew`);
};
const seen = (id: number) => {
  return API.post(`${baseUrl}/seen`, { notificationId: id });
};
export const NotificationApi = { getAll, getNews, seen };
