import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { ButtonGroup, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { PaginationItem } from "../../../containers/pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState } from "../../../store";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Tên", width: 200 },
  { field: "role", headerName: "Vai trò", width: 200 },
  { field: "role", headerName: "Vai trò", width: 200 },
];
const rows = [
  {
    id: 1,
    name: "Snow",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Jon",
    manager: "Tiep",
  },
  {
    id: 2,
    name: "Lannister",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Cersei",
    manager: "Tiep",
  },
  {
    id: 3,
    name: "Lannister",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Jaime",
    manager: 45,
  },
  {
    id: 4,
    name: "Stark",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Arya",
    manager: 16,
  },
  {
    id: 5,
    name: "Targaryen",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Daenerys",
    manager: null,
  },
  {
    id: 6,
    name: "Melisandre",
    email: "Nguyenthaitiep206@gmail.com",
    role: null,
    manager: 150,
  },
  {
    id: 7,
    name: "Clifford",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Ferrara",
    manager: 44,
  },
  {
    id: 8,
    name: "Frances",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Rossini",
    manager: 36,
  },
  {
    id: 9,
    name: "Roxie",
    email: "Nguyenthaitiep206@gmail.com",
    role: "Harvey",
    manager: 65,
  },
];

export const User = () => {
  const user = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [page, setpage] = useState(1);
  const getAllUser = () => {};
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <Table striped bordered hover className="user-table">
        <thead>
          <tr className={"text-center"}>
            <th>#</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Vai tro</th>
            <th>Quan ly</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0
            ? rows.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.manager}</td>

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
      <div className="pagination">
        <PaginationItem pageActive={page} lastPage={10} />
      </div>
    </>
  );
};
