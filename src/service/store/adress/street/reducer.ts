import { StreetsOfDistrict } from "../../../../api/address/street/dto/get";
import { ActionConst } from "./action";

const initState = {
  state: false,
  streets: [] as StreetsOfDistrict[],
};
export const StreetReducer = (
  state = initState,
  action = { type: "", payload: {} }
) => {
  switch (action.type) {
    case ActionConst.ADD:
      if (action.payload) {
        let oldAddState = { ...state }.streets || [];
        if (
          oldAddState.find(
            (i) => i.id === (action.payload as StreetsOfDistrict).id
          )
        )
          return { ...state };
        oldAddState.push(action.payload as StreetsOfDistrict);
        return { ...state, streets: oldAddState, state: false };
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
