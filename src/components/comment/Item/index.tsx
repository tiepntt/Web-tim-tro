import { Avatar } from "@material-ui/core";
import React from "react";
import { ApartmentReviewGetDto } from "../../../api/apartment/apartmentReview/dto";
import "./style.scss";
interface Props {
  comment?: ApartmentReviewGetDto;
}

export const CommentItem = (props: Props) => {
  const { comment } = props;
  return (
    <div className="comment-item">
      <div className="d-flex">
        <div className="avatar">
          <Avatar></Avatar>
        </div>
        <div className="user-content">
          <div className="user">Nguyễn Thái Tiệp </div>
          <div className="time-comment">17h00 21/12/2020</div>
        </div>
      </div>
      <div className="content-comment">{comment?.content}</div>
    </div>
  );
};
