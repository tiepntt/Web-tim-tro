import { combineReducers, createStore } from "redux";
import { UserReducer } from "./service/Toast/store/userStore/reducer";

const RootReducer = combineReducers({
  UserReducer: UserReducer,
});
export type RootState = ReturnType<typeof RootReducer>;
export const store = createStore(RootReducer);
