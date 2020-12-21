import { Store } from "redux";
import { TypeApi } from "../api/apartment/type";
import { CommonAction } from "../service/store/common/action";
import { RootState } from "../store";

export const apartmentLoader = (store: Store) => {
  let state = store.getState() as RootState;
  let comonState = state.Common;
  if (!comonState.state) {
  }
};
export const loadapartmentType = (store: Store) => {
  TypeApi.getAllApartmentType().then((res) => {
    if (res.data.status === 200) {
      store.dispatch(CommonAction.updateApartmentType(res.data.result));
    }
  });
};
export const loadKitchenType = (store: Store) => {
  TypeApi.getAllKitchenType().then((res) => {
    if (res.data.status === 200) {
      store.dispatch(CommonAction.updateKitchenType(res.data.result));
    }
  });
};
export const loadToiletType = (store: Store) => {
  TypeApi.getAllToiletType().then((res) => {
    if (res.data.status === 200) {
      store.dispatch(CommonAction.updateToiletType(res.data.result));
    }
  });
};
