import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { LabelIcon } from "../Icon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClock,
  faTrash,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { UserGetDto } from "../../../api/user/user/dto";
import { ApartmentReviewGetDto } from "../../../api/apartment/apartmentReview/dto";
import "./style.scss";
import { convertDateTime } from "../../../libs/constants/function/time";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderBottom: "solid 1px #009177",
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
    },
  })
);

interface Props {
  comment?: ApartmentReviewGetDto;
  showIcon?: boolean;
  isOwner?: boolean;
  onClick?: (id: number) => void;
  onRemove?: (id: number) => void;
}

export const CommentItemList = (props: Props) => {
  const { comment, showIcon, isOwner, onClick, onRemove } = props;
  const classes = useStyles();
  return (
    <div className="reviews-list-item">
      <div className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src={
                comment?.user?.avatar?.url ||
                "https://mogi.vn/content/images/no-avatar.jpg"
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary={comment?.user?.name}
            secondary={
              <a
                className="apartment-name"
                href={"/apartment/" + comment?.apartment?.id}
              >
                Bài viết của {comment?.apartment?.user?.name} lúc{" "}
                {convertDateTime(comment?.create_at)}
              </a>
            }
          />
          <div
            className="float-right "
            hidden={showIcon}
            onClick={() => onClick && onClick(comment?.id || -1)}
          >
            <LabelIcon
              label={<div className="accept">{"Phê duyệt"}</div>}
              icon={<FontAwesomeIcon icon={faClock} color="green" />}
            />
          </div>
          <div
            className="icon-remove "
            hidden={showIcon}
            onClick={() => onRemove && onRemove(comment?.id || -1)}
          >
            <LabelIcon
              label={<div className="remove">{"Từ chối"}</div>}
              icon={<FontAwesomeIcon icon={faTrash} color="red" />}
            />
          </div>
        </ListItem>
        <div className="comment-item-dashboard">{comment?.content}</div>
      </div>
    </div>
  );
};
