import { Expose, Type } from "class-transformer";

export class LocationOfDistrictDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  code?: string;
  @Expose()
  @Type((type) => LocationTitleGetDto)
  locations?: LocationTitleGetDto[];
}
export class LocationTitleGetDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  description?: string;
}
