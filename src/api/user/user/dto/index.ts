import { Expose, Type } from "class-transformer";
import { AvatarUserDto } from "../../../image/avatarUser";
import { ContactDto } from "../../contactUser/dto";
import { RoleDto, RoleDtoDetails } from "../../role/dto";

export class UserDto {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  roleId?: number;
  userManagerCode?: string;
}
export class UserListDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  email?: string;
  @Expose()
  @Type((type) => UserTitleDto)
  userChild?: UserTitleDto[];
}
export class UserInputDto {
  @Expose()
  name?: string;
  @Expose()
  personNo?: string;
  @Expose()
  email?: string;
  @Expose()
  password?: string;
  @Expose()
  roleId?: number;
  @Expose()
  roleCode?: string;
  @Expose()
  managerId?: number;
  isApprove?: boolean;
}
export class UserLogin {
  email?: string;
  password?: string;
}
export class UserUpdateDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  password?: string;
}
export class UserGetDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  email?: string;
  @Expose()
  isBlock?: boolean;
  @Expose()
  isApprove?: boolean;
  @Expose()
  @Type((type) => AvatarUserDto)
  avatar?: AvatarUserDto;
  @Expose()
  @Type((type) => RoleDto)
  role?: RoleDto;
  @Expose()
  @Type((type) => ContactDto)
  contactUser?: ContactDto;
}

export class UserTitleDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  email?: string;
  @Expose()
  isBlock?: boolean;
  @Expose()
  isApprove?: boolean;
}
export class UserAssignDto {
  @Expose()
  userId?: number;
  @Expose()
  userAdminId?: number;
}
export class AccountDto {
  @Expose()
  id?: number;
  @Expose()
  name?: string;
  @Expose()
  email?: string;
  @Expose()
  @Type(() => RoleDtoDetails, {})
  role?: RoleDtoDetails;
  @Expose()
  isBlock?: boolean;
  @Expose()
  isApprove?: boolean;
}
export class UserDetailDto {
  @Expose()
  id?: number;
  @Expose()
  email?: string;
  @Expose()
  name?: string;
  @Expose()
  create_at?: Date;
  @Expose()
  loginType?: string;
  @Expose()
  isBlock?: boolean;
  @Expose()
  isApprove?: boolean;
  @Expose()
  @Type(() => RoleDto, {})
  role?: RoleDto;
  @Expose()
  @Type(() => UserTitleDto, {})
  userManager?: UserTitleDto;
  @Expose()
  @Type(() => ContactDto, {})
  contactUser?: ContactDto;
  @Expose()
  @Type(() => AvatarUserDto, {})
  avatar?: AvatarUserDto;
}
