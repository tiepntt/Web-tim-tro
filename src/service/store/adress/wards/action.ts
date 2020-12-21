import { WardsOfDistrictDto } from "../../../../api/address/ward/dto/wardInDistrict";

export const ActionConst = {
  ADD: "WARD_ADD",
  CHANGE_STATE: "WARD_CHANGE_STATE",
};
export const WardStore = {
  add: (input: WardsOfDistrictDto) => {
    return { type: ActionConst.ADD, payload: input };
  },
};
