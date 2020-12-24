import { Expose, Type } from "class-transformer";
import { DistrictDto } from "../../../address/district/dto/get";
import { LocationTitleGetDto } from "../../../address/location/dto/title";
import { ProvinceGetDto } from "../../../address/province/dto/get";
import { StreetGetDto } from "../../../address/street/dto/get";
import { WardGetDto } from "../../../address/ward/dto/get";
import { PriceDto } from "../../../payment/price/dto/price.get.dto";
import { UserDto, UserTitleDto } from "../../../user/user/dto";
import { ApartmentDetailGetDto } from "../../apartmentDetail/dto";
import { ApartmentTypeGetDto } from "../../type/dto/apartmentType";

export class ApartmentInputDto {
  id?: string;
  title?: string;
  bedRoom?: number;
  bathRoom?: number;
  area?: number;
  description?: string;
  wardrobe?: number;

  price?: number;

  userId?: number;

  type?: number;

  provinceId?: number;

  districtId?: number;

  wardId?: number;
  pricePostId?: number;
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
  constructor() {
    this.apartmentDetail = new ApartmentDetailGetDto();
  }
  wardrobe?: number;
  id?: number;

  title?: string;

  description?: string;

  price?: number;

  create_at?: Date;

  user?: UserTitleDto;

  isApprove?: boolean;

  approve_at?: Date;

  delete_at?: Date;

  deadline?: Date;

  userApprove?: UserDto;

  type?: ApartmentTypeGetDto;

  province?: ProvinceGetDto;

  district?: DistrictDto;

  ward?: WardGetDto;

  street?: StreetGetDto;

  streetNo?: string;

  LocationsNear?: LocationTitleGetDto[];
  near?: ApartmentNearDto[];
  avatar?: string;
  apartmentDetail?: ApartmentDetailGetDto;
  pricePost?: PriceDto;
  bathRoom?: number;
  bedRoom?: number;
  area?: number;
}
export class ApartmentNearDto {
  id?: number;
  location?: LocationTitleGetDto;
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
export class ApartmentDto {
  id?: number;
  avatar?: string;
  views?: number;
  title?: string;

  area?: number;

  bathRoom?: number;

  bedRoom?: number;

  wardrobe?: number;

  description?: string;

  price?: number;

  streetNo?: string;

  province?: ProvinceGetDto;

  district?: DistrictDto;

  ward?: WardGetDto;
  street?: StreetGetDto;
  type?: ApartmentTypeGetDto;
  create_at?: Date;
}
