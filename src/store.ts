import { combineReducers, createStore } from "redux";

const RootReducer = combineReducers({});
export type RootState = ReturnType<typeof RootReducer>;
const store = createStore(RootReducer);
export default store;
