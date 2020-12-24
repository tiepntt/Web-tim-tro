
import { WardGetDto } from "./get";

export class WardsOfDistrictDto {

  id?: number;

  code?: string;

  name?: string;

  wards?: WardGetDto[];
}
