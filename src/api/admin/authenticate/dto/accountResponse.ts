import { Expose, Type } from "class-transformer";
import { UserGetDto } from "../../../user/user/dto";

export default class AccountResponseDto {
  @Expose()
  token?: string;
  @Expose()
  @Type((type) => UserGetDto)
  account?: UserGetDto;
}
