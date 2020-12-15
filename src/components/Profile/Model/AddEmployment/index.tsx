import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import { Manager } from "socket.io-client";
import { ManagerApi } from "../../../../api/admin/manager";
import {
  UserAssignDto,
  UserGetDto,
  UserTitleDto,
} from "../../../../api/user/user/dto";
import { handleToast } from "../../../../service/Toast";
import "./style.scss";
interface Props {
  userId?: number;
  show?: boolean;
  handleClose?: () => void;
  handleAction?: () => void;
}
export const EmploymentModel = (props: Props) => {
  const { show, handleClose, handleAction, userId } = props;
  const [users, setUsers] = useState([] as UserGetDto[]);
  const [condition, setCondition] = useState({
    take: 5,
    skip: 0,
    key: "",
  });
  const getUser = () => {
    setUsers([]);
    ManagerApi.getEmployments(condition).then((res) => {
      if (res.data.status !== 200) {
        return handleToast(res.data);
      }
      setUsers(res.data.result.result);
    });
  };
  const assignmentUser = (id: number) => {
    ManagerApi.assignUserToEmployment({
      userId: userId,
      userAdminId: id,
    } as UserAssignDto).then((res) => {
      handleToast(res.data);
      if (res.data.status === 200) {
        if (handleClose) handleClose();
      }
    });
  };
  useEffect(() => {
    getUser();
  }, [condition]);

  return (
    <Modal show={show} className="assignment-modal">
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title className="text-center">Approve</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          placeholder="Tên Nhân viên"
          onChange={(e) => {
            console.log(e.target.value);

            setCondition({ ...condition, key: e.target.value });
          }}
        />
        <div className="suggest">
          {users
            ? users.map((item, index) => (
                <div className="d-flex admin-item">
                  <div className=" d-flex content" style={{ flexGrow: 1 }}>
                    <div className="avatar-admin ">
                      <Avatar src="" />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="phone">{item.contactUser?.phone}</div>
                  </div>
                  <div
                    className="assignment"
                    onClick={() => {
                      assignmentUser(item?.id || 0);
                    }}
                  >
                    Thêm
                  </div>
                </div>
              ))
            : null}
        </div>
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
