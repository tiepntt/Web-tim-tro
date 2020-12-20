import { Expose } from "class-transformer";

export class KitchenTypeDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  code?: string;
}
