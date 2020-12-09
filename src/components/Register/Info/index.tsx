import React from "react";
import { Button, Form } from "react-bootstrap";
import "./style.scss";
interface Props {
  role?: number;
  onNext?: () => void;
}

export const InfoInput = (props: Props) => {
  const { role, onNext } = props;
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
              />
              <Form.Control type="email" placeholder="Email" />
              <Form.Control
                type="text"
                placeholder="Số chứng minh nhân dân"
                maxLength={20}
              />
              <Form.Control type="text" placeholder="Mật khẩu" maxLength={20} />
            </Form>
          </div>
        </div>
        <div className="col-md-4 col-12 img">
          <img src="https://thuenhatro360.com/u/i/YkGgFDNJ.png" />
        </div>{" "}
      </div>
      <Button onClick={onNext} style={{ flexGrow: 2 }} className="btnNext">
        Tiếp
      </Button>
    </>
  );
};
