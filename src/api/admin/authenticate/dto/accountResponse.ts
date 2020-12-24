import { AccountDto } from "../../../user/user/dto";

export default class AccountResponseDto {
  token?: string;

  account?: AccountDto;
}
