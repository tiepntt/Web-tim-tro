import { Expose, Type } from "class-transformer";
import { DistrictDto } from "../../../address/district/dto/get";
import { LocationTitleGetDto } from "../../../address/location/dto/title";
import { ProvinceGetDto } from "../../../address/province/dto/get";
import { StreetGetDto } from "../../../address/street/dto/get";
import { WardGetDto } from "../../../address/ward/dto/get";
import { UserDto, UserTitleDto } from "../../../user/user/dto";
import { ApartmentDetailGetDto } from "../../apartmentDetail/dto";
import { ApartmentTypeGetDto } from "../../type/dto/apartmentType";

export class ApartmentInputDto {
  title?: string;

  description?: string;

  price?: number;

  userId?: number;

  type?: number;

  provinceId?: number;

  districtId?: number;

  wardId?: number;

  streetId?: number;

  streetNo?: string;

  LocationsNearCode?: number[];

  avatar?: any;
}
export class ApartmentDeletedDto {
  id?: number;

  title?: string;

  description?: string;

  price?: number;

  create_at?: Date;

  delete_at?: Date;

  @Type((type) => UserTitleDto)
  user?: UserTitleDto;

  @Type((type) => UserTitleDto)
  userDeleted?: UserTitleDto;
}
export class ApartmentTitleDto {
  id?: number;

  title?: string;

  price?: number;
}
export class ApartmentGetDto {
  id?: number;

  title?: string;

  description?: string;

  price?: number;

  create_at?: Date;

  @Type((type) => UserTitleDto)
  user?: UserTitleDto;

  isApprove?: boolean;

  approve_at?: Date;

  delete_at?: Date;

  deadline?: Date;

  @Type((type) => UserDto)
  userApprove?: UserDto;

  @Type((type) => ApartmentTypeGetDto)
  type?: ApartmentTypeGetDto;

  @Type((type) => ProvinceGetDto)
  province?: ProvinceGetDto;

  @Type((type) => DistrictDto)
  district?: DistrictDto;

  @Type((type) => WardGetDto)
  ward?: WardGetDto;

  @Type((type) => StreetGetDto)
  street?: StreetGetDto;

  streetNo?: string;

  @Type((type) => LocationTitleGetDto)
  LocationsNear?: LocationTitleGetDto[];

  avatar?: string;

  @Type((type) => ApartmentDetailGetDto)
  apartmentDetail?: ApartmentDetailGetDto;
}
export class ApartmentApproveDto {
  id?: number;

  title?: string;

  price?: number;

  @Type((type) => ProvinceGetDto)
  province?: ProvinceGetDto;

  @Type((type) => DistrictDto)
  district?: DistrictDto;

  @Type((type) => WardGetDto)
  ward?: WardGetDto;

  @Type((type) => StreetGetDto)
  street?: StreetGetDto;

  streetNo?: string;

  avatar?: string;

  @Type((type) => UserTitleDto)
  user?: UserTitleDto;
}
export class ApproveInput {
  id?: number;

  userApproveId?: number;
}
