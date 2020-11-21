import { Expose } from "class-transformer";

export class LocationTitleGetDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  description?: string;
}
