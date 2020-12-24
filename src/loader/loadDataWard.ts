import { Store } from "redux";
import { WardApi } from "../api/address/ward";

import { WardStore } from "../service/store/adress/wards/action";

export const addWards = async (store: Store, districtId: number) => {
  if (districtId !== 0) {
    WardApi.getAllByDistrictId(districtId).then((res) => {
      if (res.data.status === 200) {
        store.dispatch(WardStore.add(res.data.result));
      }
    });
  }
};
