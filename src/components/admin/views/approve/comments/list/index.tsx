import React from "react";
import { ApartmentReviewGetDto } from "../../../../../../api/apartment/apartmentReview/dto";

import { UserGetDto } from "../../../../../../api/user/user/dto";
import { CommentItemList } from "../../../../../../containers/Label/commentitem";
import { UserListItem } from "../../../../../../containers/Label/userItem";

import { RoleAdmin } from "../../../../../../libs/constants/role";
import "./style.scss";
interface Props {
  type?: string;
  comments?: ApartmentReviewGetDto[];
  onSelect?: (e: number) => void;
  onRemove?: (e: number) => void;
}

export const ListComment = (props: Props) => {
  const { type, comments, onSelect, onRemove } = props;

  return (
    <div className="list-comment">
      <div className="list">
        {comments &&
          comments.map((comment) => (
            <CommentItemList
              comment={comment}
              onClick={onSelect}
              onRemove={onRemove}
            />
          ))}
      </div>
    </div>
  );
};
