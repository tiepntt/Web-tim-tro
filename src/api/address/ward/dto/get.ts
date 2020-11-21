import { Expose } from "class-transformer";

export class WardGetDto {
  @Expose()
  id?: number;
  @Expose()
  code?: string;
  @Expose()
  name?: string;
}
