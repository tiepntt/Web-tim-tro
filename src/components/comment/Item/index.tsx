import { Avatar } from "@material-ui/core";
import React from "react";
import { ApartmentReviewGetDto } from "../../../api/apartment/apartmentReview/dto";
import { convertDate, convertDateTime } from "../../../libs/constants/function/time";
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
          <Avatar src={comment?.user?.avatar?.url}></Avatar>
        </div>
        <div className="user-content">
          <div className="user">{comment?.user?.name} </div>
          <div className="time-comment">
            {convertDateTime(comment?.create_at)}
          </div>
        </div>
      </div>
      <div className="content-comment">{comment?.content}</div>
    </div>
  );
};
