import { LocationOfProvinceDto } from "../../../../api/address/location/dto/get";

export const ActionConst = {
  ADD: "LOCATION_ADD",
  CHANGE_STATE: "LOCATION_CHANGE_STATE",
};
export const LocationStore = {
  add: (input: LocationOfProvinceDto) => {
    return { type: ActionConst.ADD, payload: input };
  },
};
