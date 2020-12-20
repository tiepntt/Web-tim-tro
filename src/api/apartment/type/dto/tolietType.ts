import { Expose } from "class-transformer";

export class ToiletTypeDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  code?: string;
}
