import { Store } from "redux";
import { DistrictApi } from "../api/address/district";

import { DistrictStore } from "../service/store/adress/district/action";

export const addDistrict = async (store: Store, provinceId: number) => {
  if (provinceId !== 0) {
    DistrictApi.getAllByProvinceId(provinceId).then((res) => {
      if (res.data.status === 200) {
        store.dispatch(DistrictStore.add(res.data.result));
      }
    });
  }
};
