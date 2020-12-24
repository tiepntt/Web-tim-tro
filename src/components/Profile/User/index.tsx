import * as React from "react";
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
import { HeaderFilter } from "../header-filter";
import { EmploymentModel } from "../Model/AddEmployment";

import { AddApartmentModal } from "../addEmployment";
interface Props {
  onTogle?: () => void;
  type?: string;
}

const filter = {
  tilte: "Lọc theo",
  data: [
    { key: "approve", title: "Tất cả", value: -1 },
    { key: "approve", title: "Đã duyệt", value: 1 },
    { key: "approve", title: "Chưa duyệt", value: 0 },
  ],
};
export const User = (props: Props) => {
  const { onTogle, type } = props;
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const [users, setUsers] = useState({ data: [] as UserGetDto[], count: 0 });
  const [userSelected, setUserSelected] = useState(0);
  const [conditionFilter, setFilter] = useState({
    page: 1,
    take: 10,
    skip: 0,
    options: true,
    isApprove: -1,
    key: "",
  });
  const onSelectFilter = (index: number) => {
    setFilter({
      ...conditionFilter,
      page: 1,
      skip: 0,
      isApprove: filter.data[index].value,
    });
  };
  const [showModel, setShow] = useState(false);
  const onPageChange = (page: number) => {
    let old = { ...conditionFilter };
    setFilter({ ...conditionFilter, page: page, skip: (page - 1) * old.take });
  };
  const onSearch = (key: string) => {
    setFilter({
      ...conditionFilter,
      page: 1,
      skip: 0,
      key: key,
    });
  };
  const getAllUserForManger = () => {
    switch (type) {
      case RoleAdmin.OWNER:
        ManagerApi.getAllNewUser(conditionFilter).then((response) => {
          if (response.data.status !== 200) {
            handleToast(response.data);
            return;
          }
          setUsers(response.data.result);
        });
        break;
      case RoleAdmin.ADMIN:
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
      default:
        break;
    }
  };

  useEffect(() => {
    setUsers({ data: [], count: 0 });
    switch (user?.role?.code) {
      case RoleAdmin.MANAGER:
        getAllUserForManger();
        break;
      case RoleAdmin.ADMIN:
        break;
      default:
        break;
    }
  }, [conditionFilter, type]);
  return (
    <>
      <HeaderFilter
        onTogle={onTogle}
        onSearch={onSearch}
        onSelect={onSelectFilter}
        filter={type === RoleAdmin.OWNER ? filter : null}
        onAdd={
          user?.role?.code === RoleAdmin.MANAGER && type === RoleAdmin.ADMIN
            ? () => setShow(true)
            : undefined
        }
      />
      <Table striped bordered hover className="user-table">
        <thead>
          <tr className={"text-center"}>
            {["#", "Tên", "Email", "CMND", "Quản lý"].map((item) => (
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
                    <td>
                      {item.userManager ? (
                        <div className="manager-user">
                          {item.userManager?.name}
                        </div>
                      ) : (
                        <div
                          className="button-approve"
                          onClick={(e) => {
                            setUserSelected(item?.id || 0);
                            setShow(true);
                          }}
                        >
                          Xác thực
                        </div>
                      )}
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
          lastPage={Math.floor(users.count / (conditionFilter.take + 1)) + 1}
          onPageChange={onPageChange}
        />
      </div>
      {user?.role?.code === RoleAdmin.MANAGER && type === RoleAdmin.ADMIN ? (
        <AddApartmentModal
          show={showModel}
          onSuccess={getAllUserForManger}
          handleClose={() => setShow(false)}
        />
      ) : (
        <EmploymentModel
          show={showModel}
          userId={userSelected}
          onSuccess={getAllUserForManger}
          handleClose={() => setShow(false)}
        />
      )}
    </>
  );
};
