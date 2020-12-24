import React, { useEffect, useState } from "react";
import { ApartmentDto } from "../../../api/apartment/apartment/dto";
import { Image } from "react-bootstrap";
import "./style.scss";
import { FormatNumber } from "../../../components/apartment-detail-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBath,
  faBed,
  faComment,
  faExclamationCircle,
  faEye,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  compareDate,
  compareDateNumber,
  convertDate,
} from "../../../libs/constants/function/time";
import { getAddress } from "../apartmentItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { STATUS_APARTMENT } from "../../../components/admin/views/apartment";
import { RoleAdmin } from "../../../libs/constants/role";
import { EmploymentAPI } from "../../../api/admin/employment";
import { handleToast } from "../../../service/Toast";
import { useHistory } from "react-router";
import { ApartmentApi } from "../../../api/apartment/apartment";

interface Props {
  apartment?: ApartmentDto;
  type?: string;
  openModel?: (id: number) => void;
}

export const ApartmentItemUser = (props: Props) => {
  const { apartment, type, openModel } = props;
  const user = useSelector((state: RootState) => state.UserReducer.account);
  const history = useHistory();
  const [approve, setApprove] = useState(false);
  useEffect(() => {
    setApprove(apartment?.status || false);
  }, [type]);

  const getButtons = () => {
    return (
      <div className="detail-fast row">
        <div className="col-6">
          <div className="status wait">{}</div>
        </div>
        <div className=" col-6">
          <div className="report">
            {apartment?.status ? "Đã cho thuê" : "Đang tìm kiếm"}
          </div>
        </div>
      </div>
    );
  };
  const changeStatus = () => {
    ApartmentApi.changeStatus(apartment?.id).then((res) => {
      handleToast(res.data);
      if (res.data.status === 200) {
        history.push("/admin/apartment");
        setApprove(!approve);
      }
    });
  };
  const extendApartment = () => {};
  const approveApartment = () => {
    EmploymentAPI.approveApartment(apartment?.id).then((res) => {
      handleToast(res.data);
      if (res.data.status === 200) {
        setApprove(true);
      }
    });
  };
  const getStatusApprove = () => {
    switch (user?.role?.code) {
      case RoleAdmin.ADMIN:
        switch (type) {
          case STATUS_APARTMENT.APPROVED:
            return (
              <div className="detail-fast row">
                <div className="col-6">
                  <div className="status wait">
                    {apartment?.deadline &&
                    compareDateNumber(apartment?.deadline)
                      ? `Còn ${compareDateNumber(apartment?.deadline)} ngày`
                      : "Đã hết hạn"}
                  </div>
                </div>
                <div className=" col-6">
                  <div className="report">
                    {apartment?.status ? "Đã cho thuê" : "Đang tìm kiếm"}
                  </div>
                </div>
              </div>
            );

          case STATUS_APARTMENT.NO_APPROVED:
            break;
          case STATUS_APARTMENT.LOVE:
            break;
        }
        break;
      case RoleAdmin.MANAGER:
        switch (type) {
          case STATUS_APARTMENT.APPROVED:
            return (
              <div className="detail-fast row">
                <div className="col-6">
                  <div className="status wait">
                    {apartment?.deadline &&
                    compareDateNumber(apartment?.deadline) > 0
                      ? `Còn ${compareDateNumber(apartment?.deadline)} ngày`
                      : "Đã hết hạn"}
                  </div>
                </div>
                <div className=" col-6">
                  <div
                    className={
                      "report " + (apartment?.status ? "active" : "wait")
                    }
                  >
                    {apartment?.status ? "Đã cho thuê" : "Đang tìm kiếm"}
                  </div>
                </div>
              </div>
            );
          case STATUS_APARTMENT.NO_APPROVED:
            return (
              <div className="detail-fast row">
                <div className="col-6"></div>
                <div className=" col-6">
                  {!approve && (
                    <div className="report active" onClick={approveApartment}>
                      Duyệt
                    </div>
                  )}
                </div>
              </div>
            );

          case STATUS_APARTMENT.LOVE:
            break;
        }
        break;
      case RoleAdmin.OWNER:
        switch (type) {
          case STATUS_APARTMENT.APPROVED:
            return (
              <div className="detail-fast row">
                <div className="col-6">
                  <div
                    className="status wait"
                    onClick={() => {
                      if (
                        compareDateNumber(apartment?.deadline) <= 0 &&
                        openModel
                      )
                        openModel(apartment?.id || 0);
                    }}
                  >
                    {apartment?.deadline &&
                    compareDateNumber(apartment?.deadline) > 0
                      ? `Còn ${compareDateNumber(apartment?.deadline)} ngày`
                      : "Gia hạn"}
                  </div>
                </div>
                <div className=" col-6">
                  <div
                    className={"report " + (approve ? "active" : "wait")}
                    onClick={changeStatus}
                  >
                    {approve ? "Đã cho thuê" : "Chưa cho thuê"}
                  </div>
                </div>
              </div>
            );
          case STATUS_APARTMENT.NO_APPROVED:
            return (
              <div className="detail-fast row">
                <div className="col-6"></div>
                <div className=" col-6">
                  {!approve && (
                    <div
                      className="report active"
                      onClick={() =>
                        history.push("/apartment/edit/" + apartment?.id)
                      }
                    >
                      Sửa
                    </div>
                  )}
                </div>
              </div>
            );

          case STATUS_APARTMENT.LOVE:
            break;
        }
        break;
      case RoleAdmin.RENTER:
        break;
      default:
        break;
    }
    // return
    // apartment?.isApprove
    //   ?
    //   : "Đợi duyệt";compareDate(apartment.deadline, Date())
    //     ? "Đã duyệt"
    //     : "Gia hạn"
  };
  return (
    <div className="row apartment-user">
      <div className="col-sm-4 col-12 img-info" style={{ marginLeft: 10 }}>
        <div className="img">
          <Image
            src={
              apartment?.avatar ||
              "http://localhost:3000/apartment-1608717707128.jpg"
            }
            className="apartment-avatar"
            thumbnail
          />
        </div>
        <div className="price">{FormatNumber(apartment?.price, "vnđ")}</div>
      </div>
      <div className="col-sm-8 col-12">
        <div className="info">
          <div className="title-post">{apartment?.title}</div>
          <div className="address">{getAddress(apartment)}</div>
          <ul className={"icon-info"}>
            <li>
              <FontAwesomeIcon icon={faSquare} />{" "}
              <span>
                {" "}
                {apartment?.area}m<sup>2</sup>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBed} /> {apartment?.bedRoom}
            </li>
            <li>
              <FontAwesomeIcon icon={faBath} /> {apartment?.bathRoom}
            </li>{" "}
            <li>
              <FontAwesomeIcon icon={faEye} /> {apartment?.views}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} /> {apartment?.reviewCount}
            </li>
            <li>
              <FontAwesomeIcon icon={faExclamationCircle} />{" "}
              {apartment?.reportCount}
            </li>
          </ul>
          <div className="date">
            <span>Ngày đăng: </span>
            <span>{convertDate(apartment?.create_at)}</span>
          </div>
          <a href={`/profileUser/${apartment?.user?.id}`} className="author">
            <span>Tác giả: </span>
            <span>{apartment?.user?.name}</span>
          </a>
        </div>
        {getStatusApprove()}
      </div>
    </div>
  );
};
