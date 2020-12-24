import { ApartmentImageDto } from "../../../image/apartmentImages";
import { KitchenTypeDto } from "../../type/dto/kitchen";
import { ToiletTypeDto } from "../../type/dto/tolietType";

export class ApartmentDetailInputDto {
  id?: number;
  description?: string;
  apartmentId?: number;
  imagesId?: number[];
  toiletTypeId?: number;
  kitchenTypeId?: number;
  isHasAirConditioner?: boolean;
  isHasBalcony?: boolean;
  isHasElevator?: boolean;
  isHasFever?: boolean;
  acreage?: number;
  price?: number;
  priceElectricity?: number;
  priceWater?: string;
  isHasParking?: boolean;
}
export class ApartmentDetailGetDto {
  id?: number;

  description?: string;

  apartmentId?: number;

  images?: ApartmentImageDto[];

  toiletType?: ToiletTypeDto;

  kitchenType?: KitchenTypeDto;

  isHasAirConditioner?: boolean;

  isHasBalcony?: boolean;

  isHasElevator?: boolean;

  isHasFever?: boolean;

  acreage?: number;

  price?: number;

  priceElectricity?: number;

  priceWater?: number;

  isHasParking?: boolean;
}
