import { Expose, Type } from "class-transformer";
import { Account } from "./account";

export class AccountResponseDto {
  @Expose()
  token?: string;
  @Expose()
  @Type((type) => Account)
  account?: Account;
}
