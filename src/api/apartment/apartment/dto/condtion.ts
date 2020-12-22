export const condition = {
  minPrice: 0,
  maxPrice: 1000000000,
  minS: 0,
  maxS: 1000,
  apartmentTypeId: undefined,
  provinceId: 1,
  districtId: undefined,
  wardId: undefined,
  streetId: undefined,
  nearLocation: [],
  take: 5,
  skip: 0,
  page: 1,
  key: "",
};
export class ConditionDto {
  minPrice?: number;
  maxPrice?: 1000000000;
  minS?: 0;
  maxS?: 1000;
  apartmentTypeId?: number;
  provinceId?: number;
  districtId?: number;
  wardId?: number;
  streetId?: number;
  nearLocation?: [];
  take?: number;
  skip?: number;
  page?: number;
  key?: string;
}
