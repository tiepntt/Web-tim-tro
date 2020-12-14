import { FormControlLabel, FormGroup, Input } from "@material-ui/core";
import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

interface Props {
  name?: string;
  email?: string;
  password?: string;
  roleCod?: string;
  personNo?: string;
  buttonSave?: boolean;
  buttonEdit?: boolean;
  bottonRemove?: boolean;
  show?: boolean;
  handleClose?: () => void;
  handleAction?: () => void;
}

export const EmploymentModel = (props: Props) => {
  const { show, handleClose, handleAction, buttonEdit } = props;
  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title className="text-center">
          {buttonEdit ? "Chỉnh sửa thông tin" : "Thêm mới nhân viên"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Form.Label>Tên</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Số CMND</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Tên</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>{" "}
        <Row>
          <Col>
            <Form.Label>Vai trò</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Thoát
        </Button>
        <Button variant="primary">Lưu</Button>
      </Modal.Footer>
    </Modal>
  );
};
