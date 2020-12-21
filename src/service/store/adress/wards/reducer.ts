import { stat } from "fs";
import { WardsOfDistrictDto } from "../../../../api/address/ward/dto/wardInDistrict";
import { ActionConst } from "./action";

const initState = {
  state: false,
  wards: [] as WardsOfDistrictDto[],
};
export const WardReducer = (
  state = initState,
  action = { type: "", payload: {} }
) => {
  switch (action.type) {
    case ActionConst.ADD:
      if (action.payload) {
        let oldAddState = { ...state }.wards || [];
        if (
          oldAddState.find(
            (i) => i.id === (action.payload as WardsOfDistrictDto).id
          )
        )
          return { ...state };
        oldAddState.push(action.payload as WardsOfDistrictDto);
        return { ...state, wards: oldAddState, state: false };
      }
      return { ...state };
    case ActionConst.CHANGE_STATE:
      return {
        ...state,
        state: action.payload || false,
      };
    default:
      return state;
  }
};
