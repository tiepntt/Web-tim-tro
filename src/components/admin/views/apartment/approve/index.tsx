import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { STATUS_APARTMENT } from "..";
import { ApartmentApi } from "../../../../../api/apartment/apartment";
import { ApartmentGetDto } from "../../../../../api/apartment/apartment/dto";
import { PaginationItem } from "../../../../../containers/pagination";
import { RoleAdmin } from "../../../../../libs/constants/role";
import { RootState } from "../../../../../store";
import { SideBarUser } from "../../user/employment/sidebar";
import { ListApartment } from "./list";
import "./style.scss";
interface Props {
  type?: string;
}

export const ApproveApartment = (props: Props) => {
  const { type } = props;
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const [apartments, setApartments] = useState({
    data: [] as ApartmentGetDto[],
    count: 0,
  });
  const [conditionSearch, setCondition] = useState({
    page: 1,
    take: 5,
    skip: 0,
    key: "",
  });
  const onChangePage = (e: number) => {
    setCondition({ ...conditionSearch, page: e });
  };
  const getApartmentAdmin = (isApprove: boolean) => {
    ApartmentApi.getAll({
      ...conditionSearch,
      isApprove: isApprove,
    }).then((res) => {
      if (res.data.status) {
        setApartments(res.data.result);
      }
    });
  };
  const getApartmentForAdmin = () => {
    switch (type) {
      case STATUS_APARTMENT.APPROVED:
        getApartmentAdmin(true);
        break;
      case STATUS_APARTMENT.NO_APPROVED:
        getApartmentAdmin(false);
        break;
      case STATUS_APARTMENT.LOVE:
        break;
      default:
        break;
    }
  };
  const getApartmentForManager = () => {
    switch (type) {
      case STATUS_APARTMENT.APPROVED:
        getApartmentAdmin(true);
        break;
      case STATUS_APARTMENT.NO_APPROVED:
        getApartmentAdmin(false);
        break;
      case STATUS_APARTMENT.LOVE:
        break;
      default:
        break;
    }
  };
  const getApartmentForOnwer = () => {};
  const getApartmentForARenter = () => {};

  const getApartment = () => {
    switch (user?.role?.code) {
      case RoleAdmin.MANAGER:
        getApartmentForManager();
        break;
      case RoleAdmin.ADMIN:
        getApartmentForAdmin();
        break;
      case RoleAdmin.OWNER:
        break;
      case RoleAdmin.RENTER:
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    getApartment();
  }, [conditionSearch, type]);
  return (
    <div className="apartment-list">
      <div className="row page">
        <div className="col-lg-8 col-12">
          <ListApartment />
          <div className="pagination" style={{ marginTop: 10 }}>
            <PaginationItem
              pageActive={conditionSearch.page}
              lastPage={Math.ceil(apartments.count / conditionSearch.take)}
              onPageChange={onChangePage}
            />
          </div>
        </div>
        <div className="col-lg-4 col-12" style={{ marginBottom: "10px" }}>
          <SideBarUser />
        </div>
      </div>
    </div>
  );
};
