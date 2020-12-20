import { Store } from "redux";
import { DistrictApi } from "../api/address/district";
import { ProvinceApi } from "../api/address/province";
import { DistrictStore } from "../service/store/adress/district/action";
import { RootState } from "../store";

export const addDistrict = async (store: Store, provinceId: number) => {
  let state = store.getState() as RootState;
  DistrictApi.getAllByProvinceId(provinceId).then((res) => {
    if (res.data.status === 200) {
      store.dispatch(DistrictStore.add(res.data.result));
    }
  });
};
