import { StreetGetDto } from "./get";

export class StreetsOfDistrict {
  id?: number;

  code?: string;

  name?: string;

  streets?: StreetGetDto[];
}
