import { Expose } from "class-transformer";

export class DistrictDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
}
