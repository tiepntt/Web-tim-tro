import { DistrictForProvinceDto } from "../../../api/address/district/dto/districtOfProvince";
import { LocationOfDistrictDto } from "../../../api/address/location/dto/get";
import { ProvinceGetDto } from "../../../api/address/province/dto/get";
import { StreetsOfDistrict } from "../../../api/address/street/dto/streetInDistrict";
import { WardsOfDistrictDto } from "../../../api/address/ward/dto/wardInDistrict";
import { AddressActionConst } from "./action";
const initialState = {
  provinces: [] as ProvinceGetDto[],
  districts: [] as DistrictForProvinceDto[],
  wards: [] as WardsOfDistrictDto[],
  streets: [] as StreetsOfDistrict[],
  locations: [] as LocationOfDistrictDto[],
  provinceSelected: {} as ProvinceGetDto,
  district: {} as DistrictForProvinceDto,
  ward: {} as WardsOfDistrictDto,
  street: {} as StreetsOfDistrict,
  location: {} as LocationOfDistrictDto,
};
export const AddressReducer = (
  state = initialState,
  action = { type: "", payload: null }
) => {
  switch (action.type) {
    case AddressActionConst.GET_PROVINCES:
      return;
    case AddressActionConst.GET_DISTRICTS:
      return;
    case AddressActionConst.GET_WARDS:
      return;
    case AddressActionConst.GET_STREETS:
      return;
    case AddressActionConst.GET_LOCATIONS:
      return;
    case AddressActionConst.UPDATE_PROVINCES:
      return;
    case AddressActionConst.UPDATE_DISTRICTS:
      return;
    case AddressActionConst.UPDATE_WARDS:
      return;
    case AddressActionConst.UPDATE_STREETS:
      return;
    case AddressActionConst.UPDATE_LOCATIONS:
      return;
    default:
      return state;
  }
};
