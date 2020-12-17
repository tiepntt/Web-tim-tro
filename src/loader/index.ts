import { Store } from "redux";
import { apartmentLoader } from "./loadDataApartment";

export const loader = (store: Store) => {
  apartmentLoader(store);
};
