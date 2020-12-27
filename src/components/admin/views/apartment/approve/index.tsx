import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { STATUS_APARTMENT } from "..";
import { ApartmentApi } from "../../../../../api/apartment/apartment";
import { ApartmentGetDto } from "../../../../../api/apartment/apartment/dto";
import { PaginationItem } from "../../../../../containers/pagination";
import { RoleAdmin } from "../../../../../libs/constants/role";
import { RootState } from "../../../../../store";
import { AddApartmentModal } from "../../../../Profile/addEmployment";
import { SideBarUser } from "../../user/employment/sidebar";
import { ExtendApartmentModal } from "../extendModal";
import { ListApartment } from "./list";
import "./style.scss";
interface Props {
  type?: string;
}

export const ApproveApartment = (props: Props) => {
  const { type } = props;
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const [apartmentSelect, setApartmentSelect] = useState(0);
  const [showModel, setShow] = useState(false);
  const [apartments, setApartments] = useState({
    data: [] as ApartmentGetDto[],
    count: 0,
  });
  const openModel = (e: number) => {
    console.log("ad");

    setShow(true);
    setApartmentSelect(e);
  };
  const [conditionSearch, setCondition] = useState({
    page: 1,
    take: 5,
    skip: 0,
    key: "",
  });
  const onChangePage = (e: number) => {
    setCondition({
      ...conditionSearch,
      page: e,
      skip: (e - 1) * conditionSearch.take,
    });
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
  const getApartmentHobby = () => {
    ApartmentApi.getHobby({ ...conditionSearch }).then((res) => {
      if (res.data.status === 200) {
        setApartments(res.data.result);
      }
    });
  };
  const getApartmentOwner = (isApprove: boolean) => {
    ApartmentApi.getAllApartmentByUserId({
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
        getApartmentHobby();
        break;
      case STATUS_APARTMENT.MY_APARTMENT:
        getApartmentHobby();
        break;
      default:
        break;
    }
  };
  const onSearchChange = (e: string) => {
    setCondition({
      ...conditionSearch,
      page: 1,
      skip: 0,
      key: e,
    });
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
        getApartmentHobby();
        break;
      case STATUS_APARTMENT.MY_APARTMENT:
        getApartmentHobby();
        break;
      default:
        break;
    }
  };
  const getApartmentForOwner = () => {
    switch (type) {
      case STATUS_APARTMENT.APPROVED:
        getApartmentOwner(true);
        break;
      case STATUS_APARTMENT.NO_APPROVED:
        getApartmentOwner(false);
        break;
      case STATUS_APARTMENT.LOVE:
        getApartmentHobby();
        break;
      default:
        break;
    }
  };
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
        getApartmentForOwner();
        break;
      case RoleAdmin.RENTER:
        getApartmentHobby();
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    getApartment();
  }, [conditionSearch, type]);
  return (
    <>
      <div className="apartment--listdashboard">
        <div className="row page">
          <div className="col-lg-8 col-12">
            <ListApartment
              apartments={apartments.data}
              type={type}
              openModel={openModel}
            />
            <div className="pagination" style={{ marginTop: 10 }}>
              <PaginationItem
                pageActive={conditionSearch.page}
                lastPage={Math.ceil(apartments.count / conditionSearch.take)}
                onPageChange={onChangePage}
              />
            </div>
          </div>
          <div className="col-lg-4 col-12" style={{ marginBottom: "10px" }}>
            <SideBarUser count={apartments.count} onSearch={onSearchChange} />
          </div>
        </div>
      </div>
      {user?.role?.code == RoleAdmin.OWNER && (
        <ExtendApartmentModal
          show={showModel}
          handleClose={() => setShow(false)}
          apartmentId={apartmentSelect}
          onSuccess={getApartment}
        />
      )}
    </>
  );
};
