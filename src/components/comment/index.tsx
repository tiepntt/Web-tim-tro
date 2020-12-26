import { Avatar } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { CommentItem } from "./Item";
import SendIcon from "@material-ui/icons/Send";

import "./style.scss";
import { ApartmentReviewGetDto } from "../../api/apartment/apartmentReview/dto";
import { ApartmentReviewApi } from "../../api/apartment/apartmentReview";
import { handleToast } from "../../service/Toast";

interface Props {
  apartmentId?: number;
}

export const CommentComponent = (props: Props) => {
  const messageEl = useRef(null);
  const [comments, setComments] = useState([] as any[]);
  const [inputText, setTextInput] = useState("");
  useEffect(() => {
    if (messageEl) {
      (messageEl as any).current.addEventListener(
        "DOMNodeInserted",
        (event: any) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight, behavior: "smooth" });
        }
      );
    }
  }, [props.apartmentId]);
  const addComment = () => {
    if (inputText != "") {
      let comment = new ApartmentReviewGetDto();
      comment.content = inputText;

      setComments([...comments, <CommentItem comment={comment} />]);
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
        {comments.map((item) => item)}
      </div>
      <div className="input-comment">
        <div className="d-flex ">
          <input
            style={{ flexGrow: 1 }}
            placeholder="Bình luận"
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
