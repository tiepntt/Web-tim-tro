import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { LabelIcon } from "../Icon";
import PeopleIcon from "@material-ui/icons/People";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { UserGetDto } from "../../../api/user/user/dto";
import "./style.scss";
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
  user?: UserGetDto;
  showIcon?: boolean;
  isOwner?: boolean;
  onClick?: (id: number) => void;
}

export const UserListItem = (props: Props) => {
  const { user, showIcon, isOwner, onClick } = props;
  const classes = useStyles();
  return (
    <div className="user-list-item">
      <ListItem className={classes.root}>
        <ListItemAvatar>
          <Avatar
            src={
              user?.avatar?.url ||
              "https://mogi.vn/content/images/no-avatar.jpg"
            }
          />
        </ListItemAvatar>
        <ListItemText primary={user?.name} secondary={user?.email} />
        <div
          className="float-right "
          hidden={showIcon}
          onClick={() =>
            !user?.isApprove && isOwner && onClick && onClick(user?.id || -1)
          }
        >
          <LabelIcon
            label={
              user?.isApprove && isOwner ? (
                <span>
                  <FontAwesomeIcon icon={faUserAlt} color="green" /> {"  "}
                  <span>{user.userManager?.name}</span>
                </span>
              ) : (
                isOwner && <div className="accept">{"Phê duyệt"}</div>
              )
            }
            icon={
              <FontAwesomeIcon
                icon={user?.isApprove ? faCheck : faClock}
                color="green"
              />
            }
          />
        </div>
      </ListItem>
    </div>
  );
};
