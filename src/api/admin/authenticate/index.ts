import API from "../..";
import { Account } from "./dto/account";

const baseUrl = "/authenticate";
const login = (input: Account) => {
  return API.post(`${baseUrl}/login`, { account: input });
};
const logout = (input: any) => {};
const resigter = (input: any) => {};
export const AuthApi = { login, logout, resigter };
