import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Avatar } from "@material-ui/core";
import "./style.scss";
interface Props {
  children?: any;
  value?: any;
  index?: any;
  other?: any;
}

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

export const ProfileSidebar = (props: Props) => {
  const classes = useStyles();
  return (
    <div className="profile-sidebar">
      <div className="title-profile">
        <Avatar
          className={classes.large}
          src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/129840333_830838227740988_4120573807075780201_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=xaiZ2MnbanAAX8BvElj&_nc_ht=scontent.fhan5-7.fna&oh=2aa34d913d463218dc24821209393ec7&oe=5FF4CCBC"
        />
        <div className="name-title">
          <div className="name">Nguyễn Thái Tiệp</div>
          <div className="email">nguyenthaitiep206@gmail.com</div>
        </div>
      </div>
      <div className="tab-bar-profile">SideBar</div>
    </div>
  );
};
