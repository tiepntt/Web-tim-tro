import { ProvinceGetDto } from "../../../../api/address/province/dto/get";
import { ActionConst } from "./action";

const initState = {
  state: false,
  province: [] as ProvinceGetDto[],
};
export const ProvinceReducer = (
  state = initState,
  action = { type: "", payload: {} }
) => {
  switch (action.type) {
    case ActionConst.PROVINCE_ADD:
      let oldProvince = { ...state }.province || [];
      let addProvince = [
        ...oldProvince,
        ...(action.payload as ProvinceGetDto[]),
      ];
      return { ...state, province: addProvince, state: true };
    default:
      return state;
  }
};
