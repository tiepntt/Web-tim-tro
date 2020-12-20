import { StreetsOfDistrict } from "../../../../api/address/street/dto/get";

export const ActionConst = {
  ADD: "STREET_ADD",
  CHANGE_STATE: "STREET_CHANGE_STATE",
};
export const StreetStore = {
  add: (input: StreetsOfDistrict) => {
    return { type: ActionConst.ADD, payload: input };
  },
};
