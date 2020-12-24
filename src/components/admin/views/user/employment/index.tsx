import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { EmploymentAPI } from "../../../../../api/admin/employment";
import { ManagerApi } from "../../../../../api/admin/manager";
import { UserApi } from "../../../../../api/user/user";
import { UserGetDto } from "../../../../../api/user/user/dto";
import { PaginationItem } from "../../../../../containers/pagination";

import { RoleAdmin } from "../../../../../libs/constants/role";
import { handleToast } from "../../../../../service/Toast";
import { RootState } from "../../../../../store";
import { AddApartmentModal } from "../../../../Profile/addEmployment";
import { EmploymentModel } from "../../../../Profile/Model/AddEmployment";
import { ListUser } from "./list";
import { SideBarUser } from "./sidebar";
import "./style.scss";
interface Props {
  type?: string;
}
const filterData = [
  { key: "approve", name: "Đã duyệt", value: 1, id: 1 },
  { key: "approve", name: "Chưa duyệt", value: 0, id: 2 },
];

export const Employment = (props: Props) => {
  const { type } = props;
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const [users, setUsers] = useState({ data: [] as UserGetDto[], count: 0 });
  const [userSelected, setUserSelected] = useState(0);
  const [conditionFilter, setFilter] = useState({
    page: 1,
    take: 5,
    skip: 0,
    options: true,
    isApprove: -1,
    key: "",
  });
  const onSelectAssignment = (id: number) => {
    setUserSelected(id);
    setShow(true);
  };
  const onSelectFilter = (index: number) => {
    console.log(index);

    setFilter({
      ...conditionFilter,
      page: 1,
      skip: 0,
      isApprove: index || -1,
    });
  };
  const [showModel, setShow] = useState(false);
  const onPageChange = (page: number) => {
    let old = { ...conditionFilter };
    setFilter({ ...conditionFilter, page: page, skip: (page - 1) * old.take });
  };
  const onSearch = (key: string) => {
    console.log(key);

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
      case RoleAdmin.RENTER:
        UserApi.getAll(conditionFilter).then((response) => {
          if (response.data.status !== 200) return handleToast(response.data);
          else {
            setUsers(response.data.result);
          }
        });
        break;
      default:
        break;
    }
  };
  const getALlUserForAdmin = () => {
    switch (type) {
      case RoleAdmin.OWNER:
        EmploymentAPI.getUserOfEmployment(conditionFilter).then((response) => {
          if (response.data.status !== 200) {
            handleToast(response.data);
            return;
          }
          setUsers(response.data.result);
        });
        break;
      case RoleAdmin.RENTER:
        UserApi.getAll(conditionFilter).then((response) => {
          if (response.data.status !== 200) return handleToast(response.data);
          else {
            setUsers(response.data.result);
          }
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
        getALlUserForAdmin();
        break;
      default:
        break;
    }
  }, [conditionFilter, type]);
  return (
    <>
      <div className="user-list">
        <div className="row">
          <div className="col-lg-8 col-12">
            <ListUser
              users={users.data}
              type={type}
              onSelect={onSelectAssignment}
            />
            <div className="pagination" style={{ marginTop: 10 }}>
              <PaginationItem
                pageActive={conditionFilter.page}
                lastPage={Math.ceil(users.count / conditionFilter.take)}
                onPageChange={onPageChange}
              />
            </div>
          </div>
          <div className="col-lg-4 col-12" style={{ marginBottom: "10px" }}>
            <SideBarUser
              add={type === RoleAdmin.ADMIN}
              filter={
                type === RoleAdmin.OWNER && user?.role?.code === RoleAdmin.ADMIN
              }
              filterData={filterData as []}
              onAdd={() => setShow(true)}
              count={users.count}
              onSearch={onSearch}
              onSelect={onSelectFilter}
              filterValue={conditionFilter.isApprove}
            />
          </div>
        </div>
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
