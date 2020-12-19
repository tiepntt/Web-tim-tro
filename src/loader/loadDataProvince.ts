import { Store } from "redux";
import { ProvinceApi } from "../api/address/province";
import { Provincetore } from "../service/store/adress/province/action";
import { RootState } from "../store";

export const provinceLoader = async (store: Store) => {
  let state = store.getState() as RootState;
  let comonState = state.Province;
  if (!comonState.state) {
    ProvinceApi.getAll().then((res) => {
      if (res.data.status === 200) {
        store.dispatch(Provincetore.add(res.data.result));
      }
    });
  }
};
