export class LocationOfDistrictDto {
  id?: number;

  name?: string;

  code?: string;

  locations?: LocationTitleGetDto[];
}
export class LocationOfProvinceDto {
  id?: number;

  name?: string;

  code?: string;

  locations?: LocationTitleGetDto[];
}
export class LocationTitleGetDto {
  id?: number;

  name?: string;

  description?: string;
}
