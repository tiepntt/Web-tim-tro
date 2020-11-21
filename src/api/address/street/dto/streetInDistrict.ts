import { Expose, Type } from "class-transformer";
import { StreetGetDto } from "./get";

export class StreetsOfDistrict {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
  @Expose()
  @Type((type) => StreetGetDto)
  streets?: StreetGetDto;
}
