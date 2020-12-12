import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { PaginationItem } from "../../../containers/pagination";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { RoleAdmin } from "../../../libs/constants/role";
import { ManagerApi } from "../../../api/admin/manager";
import { handleToast } from "../../../service/Toast";
import { UserGetDto } from "../../../api/user/user/dto";
import { Table } from "react-bootstrap";

export const User = () => {
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const [users, setUsers] = useState({ data: [] as UserGetDto[], count: 0 });
  const [conditionFilter, setFilter] = useState({
    page: 1,
    take: 10,
    skip: 0,
    options: true,
  });
  const onPageChange = (page: number) => {
    let old = { ...conditionFilter };
    setFilter({ ...conditionFilter, page: page, skip: (page - 1) * old.take });
  };
  const getAllUser = () => {
    switch (user?.role?.code) {
      case RoleAdmin.ADMIN:
        break;
      case RoleAdmin.OWNER:
        break;
      case RoleAdmin.MANAGER:
        ManagerApi.getEmployments(conditionFilter).then((response) => {
          if (response.data.status !== 200) {
            handleToast(response.data);
            return;
          }
          setUsers({
            data: response.data.result.result,
            count: response.data.result.count,
          });
        });
        break;
    }
  };
  useEffect(() => {
    getAllUser();
  }, [conditionFilter]);
  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <>
      <Table striped bordered hover className="user-table">
        <thead>
          <tr className={"text-center"}>
            {["#", "Tên", "Email", "CMND", "Quản lý", "#"].map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.data.length > 0
            ? users.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.personNo}</td>
                    <td>{item.userManager?.name}</td>

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
        <PaginationItem
          pageActive={conditionFilter.page}
          lastPage={Math.floor(users.count / conditionFilter.take) + 1}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};
