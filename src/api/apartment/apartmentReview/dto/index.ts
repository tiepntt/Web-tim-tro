import { UserTitleDto } from "../../../user/user/dto";

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
}
export class ApartmentListGetDto {
  id?: number;

  title?: string;

  price?: number;

  reviewCount?: number;
}
