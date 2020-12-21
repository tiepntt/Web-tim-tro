import { LocationOfProvinceDto } from "../../../../api/address/location/dto/get";
import { ActionConst } from "./action";

const initState = {
  state: false,
  locations: [] as LocationOfProvinceDto[],
};
export const LocationReducer = (
  state = initState,
  action = { type: "", payload: {} }
) => {
  switch (action.type) {
    case ActionConst.ADD:
      if (action.payload) {
        if (
          state.locations.find(
            (i) => i === (action.payload as LocationOfProvinceDto)?.id
          )
        )
          return { ...state };

        let oldAddState = { ...state }.locations || [];
        if (
          oldAddState.find(
            (i) => i.id === (action.payload as LocationOfProvinceDto).id
          )
        )
          return { ...state };
        oldAddState.push(action.payload as LocationOfProvinceDto);

        return { ...state, locations: oldAddState, state: false };
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
