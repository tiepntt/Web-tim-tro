import { Expose, Type } from "class-transformer";
import { DistrictDto } from "../../district/dto/get";

export class StreetGetDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
  @Expose()
  @Type((type) => DistrictDto)
  districts?: DistrictDto;
}
