import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AuthApi } from "../../api/admin/authenticate";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import { ActionUserDispatch } from "../../service/store/userStore/action";
import { handleToast } from "../../service/Toast";
import { RootState } from "../../store";
import "./style.scss";
interface Props {}

export const Login = (props: Props) => {
  const user = useSelector((state: RootState) => state.UserReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [account, setaccount] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    AuthApi.login(account).then(async (response) => {
      if (response.data.status === 200) {
        await dispatch(ActionUserDispatch(response.data));
        history.push("/");
      } else {
        handleToast(response.data);
      }
    });
  };
  useEffect(() => {}, [user]);
  return (
    <div className={"Login"}>
      <HeaderItem />

      <Container className="content">
        <div className="login-box ">
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e: any) => {
                setaccount({ ...account, email: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e: any) => {
                setaccount({ ...account, password: e.target.value });
              }}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={login}>
            Đăng Nhập
          </button>{" "}
          <Button className="btn btn-success btn-block" href="/register">
            Đăng ký
          </Button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
