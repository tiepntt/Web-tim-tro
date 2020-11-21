import { Expose } from "class-transformer";

export class Register {
  name?: string;

  personNo?: string;

  email?: string;

  password?: string;

  roleId?: number;

  roleCode?: string;

  managerId?: number;
  isApprove?: boolean;
}
