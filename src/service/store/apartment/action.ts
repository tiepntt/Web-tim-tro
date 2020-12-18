import { ApartmentGetDto, ApartmentInputDto } from "../../../api/apartment/apartment/dto";

export const CHANGE = "APARTMENT_CHANGE";
export const CLEAR = "APARTMENT_CLEAR";
export const apartmentChange = (input: ApartmentGetDto) => {
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
