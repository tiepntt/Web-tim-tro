// import { combineReducers, createStore } from "redux";
// import { UserReducer } from "./service/store/userStore/reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { UserReducer } from "./service/store/userStore/reducer";
import storage from "redux-persist/lib/storage";
import { ApartmentReducer } from "./service/store/apartment/reducer";
import { CommonReducer } from "./service/store/common/reducer";
import { ProvinceReducer } from "./service/store/adress/province/reducer";
import { DistrictReducer } from "./service/store/adress/district/reducer";
const RootReducer = combineReducers({
  UserReducer: UserReducer,
  Apartment: ApartmentReducer,
  Common: CommonReducer,
  Province: ProvinceReducer,
  District: DistrictReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
export type RootState = ReturnType<typeof RootReducer>;
const pReducer = persistReducer<RootState>(persistConfig, RootReducer);
const middlewares = [logger];
export const store = createStore(pReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
