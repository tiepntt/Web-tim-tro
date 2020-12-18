import { DistrictForProvinceDto } from "../../../api/address/district/dto/districtOfProvince";
import { LocationOfDistrictDto } from "../../../api/address/location/dto/get";
import { ProvinceGetDto } from "../../../api/address/province/dto/get";
import { StreetsOfDistrict } from "../../../api/address/street/dto/streetInDistrict";
import { WardsOfDistrictDto } from "../../../api/address/ward/dto/wardInDistrict";

export const AddressActionConst = {
  UPDATE_PROVINCES: "UPDATE_PROVINCE",
  UPDATE_DISTRICTS: "UPDATE_DISTRICT",
  UPDATE_WARDS: "UPDATE_WARDS",
  UPDATE_STREETS: "UPDATE_STREETS",
  UPDATE_LOCATIONS: "UPDATE_LOCATIONS",
  GET_PROVINCES: "GET_PROVINCE",
  GET_DISTRICTS: "GET_DISTRICT",
  GET_WARDS: "GET_WARDS",
  GET_STREETS: "GET_STREETS",
  GET_LOCATIONS: "GET_LOCATIONS",
};
export const AddressAction = {
  updateProvince: (input: ProvinceGetDto) => {
    return { action: AddressActionConst.UPDATE_PROVINCES, payload: input };
  },
  updateDistrict: (input: DistrictForProvinceDto) => {
    return { action: AddressActionConst.UPDATE_DISTRICTS, payload: input };
  },
  updateWard: (input: WardsOfDistrictDto) => {
    return { action: AddressActionConst.UPDATE_WARDS, payload: input };
  },
  updateStreet: (input: StreetsOfDistrict) => {
    return { action: AddressActionConst.UPDATE_STREETS, payload: input };
  },
  updateLocation: (input: LocationOfDistrictDto) => {
    return { action: AddressActionConst.UPDATE_LOCATIONS, payload: input };
  },
  getProvince: () => {
    return { action: AddressActionConst.GET_PROVINCES, payload: null };
  },
  getDistricts: (provinceId: number) => {
    return { action: AddressActionConst.GET_DISTRICTS, payload: provinceId };
  },
  getWards: (districtId: number) => {
    return { action: AddressActionConst.GET_WARDS, payload: districtId };
  },
  getStreets: (districtId: number) => {
    return { action: AddressActionConst.GET_STREETS, payload: districtId };
  },
  getLocations: (districtId: number) => {
    return { action: AddressActionConst.GET_LOCATIONS, payload: districtId };
  },
};
