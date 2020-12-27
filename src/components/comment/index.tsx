import { Avatar } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { CommentItem } from "./Item";
import SendIcon from "@material-ui/icons/Send";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "./style.scss";
import { ApartmentReviewGetDto } from "../../api/apartment/apartmentReview/dto";
import { ApartmentReviewApi } from "../../api/apartment/apartmentReview";
import { handleToast } from "../../service/Toast";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ApartmentApi } from "../../api/apartment/apartment";
import CommentIcon from "@material-ui/icons/Comment";

interface Props {
  apartmentId?: number;
}

export const CommentComponent = (props: Props) => {
  const messageEl = useRef(null);
  const { apartmentId } = props;
  const [condition, setCondition] = useState({
    take: 5,
    skip: 0,
  });
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const [comments, setComments] = useState({
    data: [] as ApartmentReviewGetDto[],
    count: 0,
  });
  const [inputText, setTextInput] = useState("");

  useEffect(() => {}, [props.apartmentId]);
  const getComment = () => {
    ApartmentApi.getReview({
      ...condition,
      apartmentId: apartmentId || 0,
    }).then((res) => {
      if (res.data.status === 200) {
        let newData = res.data.result.data as ApartmentReviewGetDto[];
        setComments({
          data: newData.concat(comments.data),
          count: res.data.result.count,
        });
      }
    });
  };
  useEffect(() => {
    getComment();
  }, [condition]);
  const addComment = () => {
    if (inputText != "") {
      let comment = new ApartmentReviewGetDto();
      comment.content = inputText;
      setTextInput("");
      ApartmentReviewApi.create({
        ...comment,
        apartmentId: props.apartmentId,
      }).then((res) => {
        handleToast(res.data);
      });
    }
  };

  return (
    <div className="comment-component">
      <div className="list-comment" ref={messageEl}>
        {comments.count - comments.data.length > 0 && (
          <div
            className="see-more"
            onClick={() =>
              setCondition({
                ...condition,
                skip: condition.skip + condition.take,
              })
            }
          >
            Xem thêm {comments.count - comments.data.length} bình luận
          </div>
        )}
        {comments.data.map((item) => (
          <CommentItem comment={item} />
        ))}
      </div>
      <div className="input-comment">
        <div className="d-flex ">
          <div className="icon-comment">
            <CommentIcon color="error" />
          </div>
          <input
            style={{ flexGrow: 1 }}
            className="input-comment-text"
            placeholder="cảm nhận của bạn "
            onKeyPress={(e) => e.key === "Enter" && addComment()}
            value={inputText}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
          />
          <div className="icon-send" onClick={addComment}>
            <SendIcon color="error" />
          </div>
        </div>
      </div>
    </div>
  );
};
