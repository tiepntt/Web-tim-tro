import { Avatar } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ActionUserLogout } from "../../service/store/userStore/action";
import { NavbarMobile } from "./Navbar-mobile";
const HeaderItem = () => {
  const user = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();
  const clear = () => {
    dispatch(ActionUserLogout());
  };
  const getName = () => {
    let name = { ...user }.account?.name as string;
    if (name) return name.split(" ").reverse().shift();
  };
  const HeaderUser = () => {
    return user.account ? (
      <div className="header-flex d-flex">
        <div className="avatar">
          <Avatar
            src={
              user?.account?.avatar?.url ??
              "https://www.avatarins.com/image/homesmall.png"
            }
          />
        </div>
        <NavDropdown className="name" title={getName()} id="basic-nav-dropdown">
          <NavDropdown.Item href="/admin">Thông tin</NavDropdown.Item>
          <NavDropdown.Item href="/changePassword">
            Đổi mật khẩu
          </NavDropdown.Item>
          <NavDropdown.Item href="/login" onClick={clear}>
            Đăng xuất
          </NavDropdown.Item>
        </NavDropdown>
        <Button className={"post-button"} href="/apartment/add">
          Đăng Tin
        </Button>
      </div>
    ) : (
      <Button className={"post-button"} href="/login">
        Đăng nhâp
      </Button>
    );
  };
  return (
    <div className={"HeaderItem"}>
      <Navbar className={"navbar-custom"} expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/home" className={"name-app"}>
            TIMTRO.<small>vn</small>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Trang chủ</Nav.Link>
              <Nav.Link href="/link">Giới thiệu</Nav.Link>
              <Nav.Link href="/terms">Điều khoản</Nav.Link>
              <Nav.Link href="/terms">Trang cá nhân</Nav.Link>
            </Nav>
            <HeaderUser />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavbarMobile className="navbar-mobile" />
    </div>
  );
};

export default HeaderItem;
