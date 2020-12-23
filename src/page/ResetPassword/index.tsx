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

export const ResetPassWord = (props: Props) => {
  const user = useSelector((state: RootState) => state.UserReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const [account, setaccount] = useState({
    email: "",
    password: "",
  });
  const resetPass = () => {
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
          <h3>Đổi mật khẩu</h3>
          <div className="form-group">
            <label>Mật khẩu cũ</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e: any) => {
                  setaccount({ ...account, password: e.target.value });
                }}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu mới</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e: any) => {
                  setaccount({ ...account, password: e.target.value });
                }}
            />
          </div>
          <div className="form-group">
            <label>Nhập lại mật khẩu</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e: any) => {
                setaccount({ ...account, password: e.target.value });
              }}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={resetPass}>
            Đổi mật khẩu
          </button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
