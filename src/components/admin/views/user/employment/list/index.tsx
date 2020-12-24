import React from "react";

import { UserGetDto } from "../../../../../../api/user/user/dto";
import { UserListItem } from "../../../../../../containers/Label/userItem";

import { RoleAdmin } from "../../../../../../libs/constants/role";
import "./style.scss";
interface Props {
  type?: string;
  users?: UserGetDto[];
  onSelect?: (e: number) => void;
}

export const ListUser = (props: Props) => {
  const { type, users, onSelect } = props;

  return (
    <div className="list-user">
      <div className="list">
        {users &&
          users.map((user) => (
            <UserListItem
              isOwner={type === RoleAdmin.OWNER}
              user={user}
              onClick={onSelect}
            />
          ))}
      </div>
    </div>
  );
};
