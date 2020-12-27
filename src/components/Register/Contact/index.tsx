import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ContactDto } from "../../../api/user/contactUser/dto";
import { handleToast } from "../../../service/Toast";

interface Props {
  role?: string;
  setContactUser?: (state: ContactDto) => void;
  onNext?: () => void;
}

export const Contact = (props: Props) => {
  const { setContactUser, onNext } = props;
  const [contact, setContact] = useState({} as ContactDto);
  useEffect(() => {
    if (setContactUser) {
      setContactUser(contact);
    }
  }, [contact]);
  const Next = () => {
    if (!contact.address || !contact.phone) {
      return handleToast({ status: 400 });
    }
    if (onNext) onNext();
  };
  return (
    <>
      <div className="title">
        <div className="title-task"> Liên hệ</div>
      </div>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Số điện thoại 1</Form.Label>
            <Form.Control
              type="text"
              placeholder="PhoneNumber"
              maxLength={20}
              onChange={(e) => {
                setContact({ ...contact, phone: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Số điệnh thoại 2</Form.Label>
            <Form.Control
              type="phone"
              placeholder="PhoneNumber"
              onChange={(e) => {
                setContact({ ...contact, phone2: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> Địa chỉ liên lạc</Form.Label>
            <Form.Control
              type="text"
              placeholder="VD : số 144 Xuân Thủy, Cầu Giấy, Hà Nội"
              onChange={(e) => {
                setContact({ ...contact, address: e.target.value });
              }}
            />
          </Form.Group>
          <Button onClick={Next}>Xong</Button>
        </Form>
      </div>
    </>
  );
};
