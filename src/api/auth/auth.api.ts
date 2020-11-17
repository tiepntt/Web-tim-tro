import API from "../index";
import { loginInput } from "./auth.dto";

const login = (input?: any) => {
  return API.post("/admin/login", input);
};
const logout = () => {};
export const AuthApi = { login, logout };
