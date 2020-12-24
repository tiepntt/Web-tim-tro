import { Type } from "class-transformer";
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
  id?: number;

  name?: string;

  email?: string;

  @Type((type) => UserTitleDto)
  userChild?: UserTitleDto[];
}
export class UserInputDto {
  name?: string;

  personNo?: string;

  email?: string;

  password?: string;

  roleId?: number;

  roleCode?: string;

  managerId?: number;
  isApprove?: boolean;
}
export class UserLogin {
  email?: string;
  password?: string;
}
export class UserUpdateDto {
  id?: number;

  name?: string;

  password?: string;
}
export class UserGetDto {
  id?: number;

  name?: string;

  email?: string;

  isBlock?: boolean;

  isApprove?: boolean;

  @Type((type) => AvatarUserDto)
  avatar?: AvatarUserDto;

  @Type((type) => RoleDto)
  role?: RoleDto;

  @Type((type) => ContactDto)
  contactUser?: ContactDto;

  @Type((type) => UserTitleDto)
  userManager?: UserTitleDto;

  personNo?: string;

  createAt?: Date;
}

export class UserTitleDto {
  id?: number;

  name?: string;

  email?: string;

  isBlock?: boolean;

  isApprove?: boolean;
}
export class UserAssignDto {
  userId?: number;

  userAdminId?: number;
}
export class AccountDto {
  id?: number;

  name?: string;

  email?: string;

  @Type(() => RoleDtoDetails, {})
  role?: RoleDtoDetails;

  isBlock?: boolean;

  isApprove?: boolean;
  avatar?: AvatarDto;
}
export class AvatarDto {
  id?: number;

  url?: string;
  avatar?: AvatarUserDto;
}
export class UserDetailDto {
  id?: number;

  email?: string;

  name?: string;

  create_at?: Date;

  loginType?: string;

  isBlock?: boolean;

  isApprove?: boolean;

  @Type(() => RoleDto, {})
  role?: RoleDto;

  @Type(() => UserTitleDto, {})
  userManager?: UserTitleDto;

  @Type(() => ContactDto, {})
  contactUser?: ContactDto;

  @Type(() => AvatarUserDto, {})
  avatar?: AvatarUserDto;

  personNo?: string;
}
export class ChangePasswordDto {
  oldPassword?: string;
  newPassword?: string;
  newPasswordLoop?: string;
}
