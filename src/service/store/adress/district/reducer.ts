import { DistrictForProvinceDto } from "../../../../api/address/district/dto/districtOfProvince";
import { ActionConst } from "./action";

const initState = {
  state: false,
  districts: [] as DistrictForProvinceDto[],
};
export const DistrictReducer = (
  state = initState,
  action = { type: "", payload: {} }
) => {
  switch (action.type) {
    case ActionConst.ADD:
      let oldAddState = { ...state }.districts || [];
      let newAddProvince = [
        oldAddState,
        ...(action.payload as DistrictForProvinceDto[]),
      ];
      return { ...state, districts: newAddProvince, state: true };
    case ActionConst.CHANGE_STATE:
      return {
        ...state,
        state: action.payload || false,
      };
    default:
      return state;
  }
};
