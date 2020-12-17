import { ApartmentGetDto } from "../../../api/apartment/apartment/dto";
import { CHANGE, CLEAR } from "./action";

const initialState = {} as ApartmentGetDto;

export const ApartmentReducer = (
  state = initialState,
  action = { type: "", payload: {} }
) => {
  let payload = action.payload as ApartmentGetDto;
  switch (action.type) {
    case CHANGE:
      let oldState = { ...state };
      return { ...oldState, ...payload };
    case CLEAR:
      return {};
    default:
      return state;
  }
};
