import { Expose, Type } from "class-transformer";
import { DistrictDto } from "./get";

export class DistrictForProvinceDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
  @Expose()
  @Type((type) => DistrictDto)
  districts?: DistrictDto[];
}
