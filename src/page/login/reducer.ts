import { AuthApi } from "../../api/auth/auth.api";
import { Action } from "../../dto/action/action.dto";

const initialState = {
  username: null,
  password: null,
};
const LoginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return state;
    case "LOGOUT":
      return state;
    case "UPDATE":
      let newState = {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };

      return newState;
    default:
      return state;
  }
};
export default LoginReducer;
