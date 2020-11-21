import { Expose } from "class-transformer";

export class ProvinceGetDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
}
