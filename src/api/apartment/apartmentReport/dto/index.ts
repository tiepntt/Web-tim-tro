import { UserTitleDto } from "../../../user/user/dto";
import { ApartmentTitleDto } from "../../apartment/dto";

export class ApartmentReportInputDto {
  id?: number;
  content?: string;
  userId?: number;
  apartmentId?: number;
}
export class ApartmentReportGetDto {
  id?: number;

  create_at?: Date;

  content?: string;

  isApprove?: boolean;

  user?: UserTitleDto;

  apartment?: ApartmentTitleDto;
}
export class ApartmentReportDto {
  id?: number;

  title?: string;

  price?: number;

  reportCount?: number;
}
