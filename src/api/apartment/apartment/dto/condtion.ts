export const condition = {
  minPrice: 0,
  maxPrice: 1000000000,
  minS: 0,
  maxS: 1000,
  apartmentTypeId: null,
  provinceId: 1,
  districtId: null,
  wardId: null,
  streetId: null,
  nearLocation: [],
  take: 5,
  skip: 0,
  page: 1,
};
export class ConditionDto {
  minPrice?: number;
  maxPrice?: 1000000000;
  minS?: 0;
  maxS?: 1000;
  apartmentTypeId?: null;
  provinceId?: number;
  districtId?: null;
  wardId?: null;
  streetId?: null;
  nearLocation?: [];
  take?: number;
  skip?: number;
  page?: number;
}
