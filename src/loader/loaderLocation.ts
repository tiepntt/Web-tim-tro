import { Store } from "redux";
import { LocationApi } from "../api/address/location";
import { LocationStore } from "../service/store/adress/location/action";

export const loadLocation = async (store: Store, provinceId: number) => {
  LocationApi.getAllByProvinceId(provinceId).then((res) => {
    if (res.data.status === 200) {
      store.dispatch(LocationStore.add(res.data.result));
    }
  });
};
