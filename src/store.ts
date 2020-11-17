import { combineReducers, createStore } from "redux";
import BookReducer from "./components/bookList/reducer";
import NotificationReducer from "./components/notification/reducer";
import LoginReducer from "./page/login/reducer";

const RootReducer = combineReducers({
  auth: LoginReducer,
  books: BookReducer,
  notification: NotificationReducer,
});
export type RootState = ReturnType<typeof RootReducer>;
const store = createStore(RootReducer);
export default store;
