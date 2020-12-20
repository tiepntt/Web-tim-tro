import { DistrictForProvinceDto } from "../../../../api/address/district/dto/districtOfProvince";

export const ActionConst = {
  ADD: "DISTRICT_ADD",
  CHANGE_STATE: "DISTRICT_CHANGE_STATE",
};
export const DistrictStore = {
  add: (input: DistrictForProvinceDto) => {
    return { type: ActionConst.ADD, payload: input };
  },
  changeState: (input: boolean) => {
    return { type: ActionConst.CHANGE_STATE, payload: input };
  },
};
