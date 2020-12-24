import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ManagerApi } from "../../../api/admin/manager";
import { UserInputDto } from "../../../api/user/user/dto";
import { TextFieldInput } from "../../../containers/Input/textField";
import { handleToast } from "../../../service/Toast";
import "./style.scss";
interface Props {
  show?: boolean;
  handleClose?: () => void;
  handleAction?: () => void;
  onSuccess?: () => void;
}

export const AddApartmentModal = (props: Props) => {
  const { show, handleClose, onSuccess } = props;
  const [adminAdd, setAdminAdd] = useState({} as UserInputDto);
  useEffect(() => {
    setAdminAdd({});
  }, [show]);
  const addEmployment = () => {
    if (!adminAdd || !adminAdd.name || !adminAdd.email || !adminAdd.password) {
      return handleToast({ status: 400, message: "email" });
    }
    ManagerApi.createEmployment(adminAdd).then((res) => {
      handleToast(res.data);
      if (res.data.status === 200) {
        if (handleClose) handleClose();
        if (onSuccess) onSuccess();
      }
    });
  };
  const onChangeInput = (key: string, value: any) => {
    setAdminAdd({ ...adminAdd, [key]: value });
  };
  return (
    <Modal show={show} className="assignment-modal">
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title className="text-center">Thêm Nhân viên</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-sm-6 col-12">
            <TextFieldInput
              label={"Tên nhân viên"}
              labelNotBold
              required
              value={adminAdd.name}
              onChange={(e) => onChangeInput("name", e)}
            />
          </div>
          <div className="col-sm-6 col-12">
            <TextFieldInput
              label={"Số CMND"}
              type="text"
              labelNotBold
              required
              value={adminAdd.personNo}
              onChange={(e) => onChangeInput("personNo", e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TextFieldInput
              label={"Email"}
              type="email"
              labelNotBold
              required
              value={adminAdd.email}
              onChange={(e) => onChangeInput("email", e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TextFieldInput
              label={"Mật khẩu"}
              type="password"
              labelNotBold
              required
              value={adminAdd.password}
              onChange={(e) => onChangeInput("password", e)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Thoát
        </Button>
        <Button variant="primary" onClick={addEmployment}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
