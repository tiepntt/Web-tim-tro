import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserInputDto } from "../../../api/user/user/dto";
import { RoleAdmin } from "../../../libs/constants/role";
import { handleToast } from "../../../service/Toast";
import "./style.scss";
interface Props {
  role?: string;
  onNext?: () => void;
  stateChange?: (state: UserInputDto) => void;
}

export const InfoInput = (props: Props) => {
  const { role, onNext, stateChange } = props;
  const [userInfo, setUserInfo] = useState({
    password: "",
    name: "",
    personNo: "",
  } as UserInputDto);
  const Next = () => {
    if (onNext) {
      if (
        !userInfo.name ||
        !userInfo.password ||
        (!userInfo.personNo && role == RoleAdmin.OWNER)
      )
        return handleToast({ status: 400, message: "Điền đầy đủ thông tin" });
      onNext();
    }
  };
  useEffect(() => {
    if (stateChange) stateChange(userInfo);
  }, [userInfo]);
  return (
    <>
      <div className="title">
        <div className="title-task"> Thông tin cá nhân</div>
      </div>
      <div className="infoInput row panel">
        <div className="col-md-8 col-12 ">
          <div className="form-input">
            <Form>
              <Form.Control
                type="text"
                placeholder="Họ và tên"
                maxLength={20}
                onChange={(e: any) => {
                  setUserInfo({ ...userInfo, name: e.target.value });
                }}
              />
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e: any) => {
                  setUserInfo({ ...userInfo, email: e.target.value });
                }}
              />
              <Form.Control
                type="text"
                placeholder="Số chứng minh nhân dân"
                maxLength={20}
                onChange={(e: any) => {
                  setUserInfo({ ...userInfo, personNo: e.target.value });
                }}
              />
              <Form.Control
                type="text"
                placeholder="Mật khẩu"
                maxLength={20}
                onChange={(e: any) => {
                  setUserInfo({ ...userInfo, password: e.target.value });
                }}
              />
            </Form>
          </div>
        </div>
        <div className="col-md-4 col-12 img">
          <img src="https://thuenhatro360.com/u/i/YkGgFDNJ.png" />
        </div>{" "}
      </div>
      <Button onClick={Next} style={{ flexGrow: 2 }} className="btnNext">
        Tiếp
      </Button>
    </>
  );
};
