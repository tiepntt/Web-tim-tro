import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ManagerApi } from "../../../../api/admin/manager";
import { UserAssignDto, UserGetDto } from "../../../../api/user/user/dto";
import { handleToast } from "../../../../service/Toast";
import "./style.scss";
interface Props {
  userId?: number;
  show?: boolean;
  handleClose?: () => void;
  handleAction?: () => void;
  onSuccess?: () => void;
}
export const EmploymentModel = (props: Props) => {
  const { show, handleClose, userId, onSuccess } = props;
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
        if (onSuccess) onSuccess();
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
