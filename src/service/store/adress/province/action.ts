import { ProvinceGetDto } from "../../../../api/address/province/dto/get";

export const ActionConst = {
  PROVINCE_ADD: "PROVINCE_ADD",
};
export const Provincetore = {
  add: (input: ProvinceGetDto[]) => {
    return {
      type: ActionConst.PROVINCE_ADD,
      payload: input,
    };
  },
};
