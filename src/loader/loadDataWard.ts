import { Store } from "redux";
import { WardApi } from "../api/address/ward";

import { DistrictStore } from "../service/store/adress/district/action";
import { WardStore } from "../service/store/adress/wards/action";
import { RootState } from "../store";

export const addWards = async (store: Store, districtId: number) => {
  WardApi.getAllByDistrictId(districtId).then((res) => {
    if (res.data.status === 200) {
      store.dispatch(WardStore.add(res.data.result));
    }
  });
};
