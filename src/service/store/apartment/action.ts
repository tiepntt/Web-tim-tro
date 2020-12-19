import { LocationTitleGetDto } from "../../../api/address/location/dto/title";
import { ApartmentGetDto } from "../../../api/apartment/apartment/dto";

export const CHANGE = "APARTMENT_CHANGE";
export const CLEAR = "APARTMENT_CLEAR";
export const ADD_LOCATION = "APARTMENT_LOCATION_ADD";
export const REMOVE_LOCATION = "APARTMENT_LOCATION_REMOVE";
export const apartmentInputChange = (input: ApartmentGetDto) => {
  return {
    type: CHANGE,
    payload: input,
  };
};
export const apartmentClear = () => {
  return {
    type: CLEAR,
    payload: null,
  };
};
export const addLocation = (input: LocationTitleGetDto) => {
  return {
    type: ADD_LOCATION,
    payload: input,
  };
};
export const removeLocation = (input: LocationTitleGetDto) => {
  return {
    type: REMOVE_LOCATION,
    payload: input,
  };
};
export const ChangeMain = () => {};
