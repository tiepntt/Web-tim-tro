import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";

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
var myData = [
  { id: 1, name: "John" },
  { id: 2, name: "Miles" },
  { id: 3, name: "Charles" },
  { id: 4, name: "Herbie" },
];
export const EmploymentModel = (props: Props) => {
  const { show, handleClose, handleAction, buttonEdit } = props;
  const [singleSelections, setSingleSelections] = useState([]);
  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title className="text-center">
          {buttonEdit ? "Chỉnh sửa thông tin" : "Approve"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Autocomplete
          id="combo-box-demo"
          options={myData}
          getOptionLabel={(option: any) => {
            return option.name;
          }}
          renderInput={(params: any) => (
            <TextField {...params} label="Tên Nhân viên" variant="outlined" />
          )}
        />
        <Table striped bordered hover className="user-table">
          <thead>
            <tr className={"text-center"}>
              {["#", "Tên"].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {myData.length > 0
              ? myData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>
                        <div className="d-flex">
                          <div className={"icon-item"}>
                            <FontAwesomeIcon icon={faEdit} color={"green"} />
                          </div>
                          <div className={"icon-item"} onClick={() => {}}>
                            <FontAwesomeIcon icon={faTrash} color={"red"} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </Table>
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
