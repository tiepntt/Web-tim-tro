import {
  faEnvelope,
  faPhoneAlt,
  faSms,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, makeStyles } from "@material-ui/core";
import { EmailOutlined, Phone } from "@material-ui/icons";
import React from "react";
import "./style.scss";

interface Props {}
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
export const SideBarApartment = (props: Props) => {
  const classes = useStyles();
  return (
    <div className="sibar-apartment">
      <div className="user-box">
        <div className="user-info">
          <div className="avatar">
            <Avatar
              src={
                "https://cloud.mogi.vn/images/2020/11/21/581/537107b650a3455abcaa6396570f0217.jpg"
              }
              className={classes.large}
              // size={32}
            />
          </div>
          <div className="user-info-title">
            <a href="/profileUser" data-rb-event-key="/profileUser" className="nav-link"><div className="name"> Nguyễn Thái Tiệp</div></a>
            <div className="time">Đã tham gia 2 năm 10 tháng</div>
          </div>
        </div>
        <div className="contact row">
          <div className="col-6 contact-item">
            <Phone color="primary" /> {"  "}
            <span>0819200620</span>
          </div>
          <div className="col-6 contact-item">
            <EmailOutlined color="primary" /> {"  "}
            <span>Gửi tin nhắn</span>
          </div>
        </div>
      </div>
    </div>
  );
};
