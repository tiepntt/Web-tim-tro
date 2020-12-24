export class RoleDtoDetails {
  id?: number;

  code?: string;

  name?: string;

  description?: string;

  isApproveApartment?: boolean;

  isApproveUser?: boolean;

  isApproveComment?: boolean;

  isManager?: boolean;

  isCreateApartment?: boolean;

  isEditApartment?: boolean;

  isReport?: boolean;

  isCreateOrEditComment?: boolean;
}
export class RoleDto {
  id?: number;

  code?: string;

  name?: string;
}
