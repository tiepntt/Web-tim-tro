import { Expose } from "class-transformer";

export class WardInputDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
  @Expose()
  districtCode?: string;
}
