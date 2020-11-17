import API from "../../index";
let baseUrl = "/book";
const getBook = (skip: number, take: number) => {
  return API.get(`${baseUrl}/skip=${skip}&take=${take}`);
};
const addBook = () => {};
export const BookApi = { getBook, addBook };
