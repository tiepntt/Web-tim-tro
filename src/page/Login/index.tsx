import React from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import { Apartment } from "../../components/apartment";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import "./style.scss";
interface Props {}

export const Login = (props: Props) => {
  return (
    <div className={"Login"}>
      <HeaderItem />

      <Container className="content">
        <div className="login-box ">
          <form>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Đăng Nhập
            </button>{" "}
            <Button className="btn btn-success btn-block" href="/register">
              Đăng ký
            </Button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
