import { ApartmentTypeGetDto } from "../../../api/apartment/type/dto/apartmentType";
import { KitchenTypeDto } from "../../../api/apartment/type/dto/kitchen";
import { ToiletTypeDto } from "../../../api/apartment/type/dto/tolietType";

export const GET_ALL = "COMMON_GET_ALL";
export const UPDATE_APARTMENT_TYPE = "UPDATE_APARTMENT_TYPE";
export const UPDATE_TOILET_TYPE = "UPDATE_TOILET_TYPE";
export const UPDATE_KITCHEN_TYPE = "UPDATE_KITCHEN_TYPE";

const updateApartmentType = (input: ApartmentTypeGetDto[]) => {
  return {
    type: UPDATE_APARTMENT_TYPE,
    payload: input,
  };
};
const updateToiletType = (input: ToiletTypeDto[]) => {
  return {
    type: UPDATE_TOILET_TYPE,
    payload: input,
  };
};
const updateKitchenType = (input: KitchenTypeDto) => {
  return {
    type: UPDATE_KITCHEN_TYPE,
    payload: input,
  };
};
export const CommonAction = {
  updateApartmentType,
  updateKitchenType,
  updateToiletType,
};
