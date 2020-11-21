import { Expose, Type } from "class-transformer";
import { WardGetDto } from "./get";

export class WardsOfDistrictDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
  @Expose()
  @Type((type) => WardGetDto)
  wards?: WardGetDto[];
}
