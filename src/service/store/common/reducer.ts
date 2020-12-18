import { TypeApi } from "../../../api/apartment/type";
import { ApartmentTypeGetDto } from "../../../api/apartment/type/dto/apartmentType";
import { KitchenTypeDto } from "../../../api/apartment/type/dto/kitchen";
import { ToiletTypeDto } from "../../../api/apartment/type/dto/tolietType";
import {
  GET_ALL,
  UPDATE_APARTMENT_TYPE,
  UPDATE_KITCHEN_TYPE,
  UPDATE_TOILET_TYPE,
} from "./action";

const initialState = {
  state: false,
  apartmentTypes: [] as ApartmentTypeGetDto[],
  toiletTypes: [] as ToiletTypeDto[],
  kitchenTypes: [] as KitchenTypeDto[],
};
export const CommonReducer = (
  state = initialState,
  action = { type: "", payload: [] }
) => {
  switch (action.type) {
    case UPDATE_APARTMENT_TYPE:
      let apartmentTypes = action.payload as ApartmentTypeGetDto[];
      let oldState = { ...state };
      return { ...oldState, apartmentTypes: apartmentTypes, state: true };
    case UPDATE_KITCHEN_TYPE:
      let kitchenTypes = action.payload as KitchenTypeDto[];
      return { ...state, kitchenType: kitchenTypes, state: true };
    case UPDATE_TOILET_TYPE:
      let toiletTypes = action.payload as ToiletTypeDto[];
      return { ...state, toiletTypes: toiletTypes, state: true };
    default:
      return state;
  }
};
