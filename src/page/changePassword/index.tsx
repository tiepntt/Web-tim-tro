import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { UserApi } from "../../api/user/user";
import { ChangePasswordDto } from "../../api/user/user/dto";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";

import { CheckBoxGreen } from "../../containers/Input/greenCheckBox";
import { ActionUserLogout } from "../../service/store/userStore/action";
import { handleToast } from "../../service/Toast";

import "./style.scss";
interface Props {}

export const ChangePassword = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [callApi, setCallApi] = useState({
    show: false,
    send: false,
  });
  const [account, setAccount] = useState({
    newPassword: "",
    oldPassword: "",
    newPasswordLoop: "",
  } as ChangePasswordDto);
  const changePassword = () => {
    UserApi.changePassword(account).then((res) => {
      handleToast(res.data);
      if (res.data.status === 200) {
        setTimeout(() => {
          dispatch(ActionUserLogout());
          history.push("/login");
        }, 1500);
      }
    });
  };

  const getMessage = () => {
    let check = account.newPassword === account.newPasswordLoop;
    // setCallApi({ show: true, send: true });
    return check ? "mật khẩu trùng khớp" : "mật khẩu không trùng khớp";
  };
  useEffect(() => {
    let check =
      account.newPassword !== "" &&
      account.oldPassword !== "" &&
      account.newPasswordLoop !== "";
    setCallApi({ show: check, send: false });
  }, [account]);
  return (
    <div className={"change-password"}>
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
                setAccount({ ...account, oldPassword: e.target.value });
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
                setAccount({ ...account, newPassword: e.target.value });
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
                setAccount({ ...account, newPasswordLoop: e.target.value });
              }}
            />
            {callApi.show ? (
              <div className="d-flex check-password">
                <CheckBoxGreen
                  value={account.newPassword === account.newPasswordLoop}
                />
                <div className="message-check">
                  <span> {getMessage()}</span>
                </div>
              </div>
            ) : null}
          </div>
          <button
            className="btn btn-primary btn-block"
            onClick={changePassword}
            disabled={
              !(
                account.newPassword === account.newPasswordLoop &&
                account.newPassword !== "" &&
                account.oldPassword !== ""
              )
            }
          >
            Đổi mật khẩu
          </button>
        </div>
      </Container>
    </div>
  );
};
