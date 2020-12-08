import React from "react";
import { Button, Form } from "react-bootstrap";

interface Props {
  role?: number;
}

export const Contact = (props: Props) => {
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
        <Button>Tiếp</Button>
      </Form>
    </div>
  );
};
