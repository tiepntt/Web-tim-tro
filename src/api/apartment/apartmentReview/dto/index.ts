import { AvatarUserDto } from "../../../image/avatarUser";
import { UserTitleDto } from "../../../user/user/dto";
import { ApartmentTitleDto } from "../../apartment/dto";

export class ApartmentReviewInputDto {
  id?: number;
  content?: string;
  star?: number;
  userId?: number;
  apartmentId?: number;
}
export class ApartmentReviewGetDto {
  id?: number;

  content?: string;

  star?: number;

  create_at?: Date;

  user?: UserTitleDto;
  avatar?: AvatarUserDto;

  apartment?: ApartmentTitleDto;
}
export class ApartmentListGetDto {
  id?: number;

  title?: string;

  price?: number;

  reviewCount?: number;
}
