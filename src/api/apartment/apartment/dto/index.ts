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
  LocationsNearCode?: string[];
  avatar?: string;
}
export class ApartmentDeletedDto {
  @Expose()
  id?: number;
  @Expose()
  title?: string;
  @Expose()
  description?: string;
  @Expose()
  price?: number;
  @Expose()
  create_at?: Date;
  @Expose()
  delete_at?: Date;
  @Expose()
  @Type((type) => UserTitleDto)
  user?: UserTitleDto;
  @Expose()
  @Type((type) => UserTitleDto)
  userDeleted?: UserTitleDto;
}
export class ApartmentTitleDto {
  @Expose()
  id?: number;
  @Expose()
  title?: string;
  @Expose()
  price?: number;
}
export class ApartmentGetDto {
  @Expose()
  id?: number;
  @Expose()
  title?: string;
  @Expose()
  description?: string;
  @Expose()
  price?: number;
  @Expose()
  create_at?: Date;
  @Expose()
  @Type((type) => UserTitleDto)
  user?: UserTitleDto;
  @Expose()
  isApprove?: boolean;
  @Expose()
  approve_at?: Date;
  @Expose()
  delete_at?: Date;
  @Expose()
  deadline?: Date;
  @Expose()
  @Type((type) => UserDto)
  userApprove?: UserDto;
  @Expose()
  @Type((type) => ApartmentTypeGetDto)
  type?: ApartmentTypeGetDto;
  @Expose()
  @Type((type) => ProvinceGetDto)
  province?: ProvinceGetDto;
  @Expose()
  @Type((type) => DistrictDto)
  district?: DistrictDto;
  @Expose()
  @Type((type) => WardGetDto)
  ward?: WardGetDto;
  @Expose()
  @Type((type) => StreetGetDto)
  street?: StreetGetDto;
  @Expose()
  streetNo?: string;
  @Expose()
  @Type((type) => LocationTitleGetDto)
  LocationsNear?: LocationTitleGetDto[];
  @Expose()
  avatar?: string;
  @Expose()
  @Type((type) => ApartmentDetailGetDto)
  apartmentDetail?: ApartmentDetailGetDto;
}
export class ApartmentApproveDto {
  @Expose()
  id?: number;
  @Expose()
  title?: string;
  @Expose()
  price?: number;
  @Expose()
  @Type((type) => ProvinceGetDto)
  province?: ProvinceGetDto;
  @Expose()
  @Type((type) => DistrictDto)
  district?: DistrictDto;
  @Expose()
  @Type((type) => WardGetDto)
  ward?: WardGetDto;
  @Expose()
  @Type((type) => StreetGetDto)
  street?: StreetGetDto;
  @Expose()
  streetNo?: string;
  @Expose()
  avatar?: string;
  @Expose()
  @Type((type) => UserTitleDto)
  user?: UserTitleDto;
}
export class ApproveInput {
  @Expose()
  id?: number;
  @Expose()
  userApproveId?: number;
}
