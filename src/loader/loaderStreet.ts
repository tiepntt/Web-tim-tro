import { Store } from "redux";
import { StreetApi } from "../api/address/street";
import { StreetStore } from "../service/store/adress/street/action";

export const addStreets = async (store: Store, districtId: number) => {
  if (districtId != 0) {
    StreetApi.getAllByDistrictId(districtId).then((res) => {
      if (res.data.status === 200) {
        store.dispatch(StreetStore.add(res.data.result));
      }
    });
  }
};
