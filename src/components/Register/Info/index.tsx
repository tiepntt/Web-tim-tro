import React from "react";
import { Button, Form } from "react-bootstrap";

interface Props {
  role?: number;
  onNext?: () => void;
}

export const InfoInput = (props: Props) => {
  const { role, onNext } = props;
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            maxLength={20}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label> Mật khẩu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            maxLength={20}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Số CMND</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            maxLength={20}
          />
        </Form.Group>
        <Button onClick={onNext}>Tiếp</Button>
      </Form>
    </div>
  );
};
