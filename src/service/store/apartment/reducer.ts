import { LocationTitleGetDto } from "../../../api/address/location/dto/title";
import { ApartmentGetDto } from "../../../api/apartment/apartment/dto";
import { ADD_LOCATION, CHANGE, CLEAR, REMOVE_LOCATION } from "./action";

const initialState = {} as ApartmentGetDto;

export const ApartmentReducer = (
  state = initialState,
  action = { type: "", payload: {} }
) => {
  switch (action.type) {
    case CHANGE:
      let apartment = action.payload as ApartmentGetDto;
      return { ...state, ...apartment };
    case CLEAR:
      return {};
    case ADD_LOCATION:
      let location = { ...state }.LocationsNear || [];
      if (location.find((item) => item === action.payload) || !action.payload)
        return state;
      location?.push(action.payload as LocationTitleGetDto);
      let newStateAdd = {
        ...state,
        LocationsNear: location,
      };
      console.log(newStateAdd);
      return newStateAdd;
    case REMOVE_LOCATION:
      let locationInitRemove = { ...state }.LocationsNear || [];
      let newState = {
        ...state,
        LocationsNear: locationInitRemove?.filter(
          (item) => item !== action.payload
        ),
      };
      return newState;
    default:
      return state;
  }
};
