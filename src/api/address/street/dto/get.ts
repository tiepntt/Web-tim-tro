import { DistrictDto } from "../../district/dto/get";

export class StreetGetDto {
  id?: number;

  code?: string;

  name?: string;

  districts?: DistrictDto;
}

export class StreetsOfDistrict {
  id?: number;

  code?: string;

  name?: string;

  streets?: StreetGetDto;
}
