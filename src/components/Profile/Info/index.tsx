import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { UserApi } from "../../../api/user/user";
import { UserDetailDto } from "../../../api/user/user/dto";
import { convertDate } from "../../../libs/constants/function/time";
import { handleToast } from "../../../service/Toast";
import "./style.scss";
interface Props {}

export const InfoProfile = (props: Props) => {
  const [user, setUserInfo] = useState({} as UserDetailDto);
  useEffect(() => {
    UserApi.getInfo().then((response) => {
      if (response.data.status !== 200)
        return handleToast(response.data.status);
      setUserInfo(response.data.result);
    });
  }, []);
  return (
    <div className="info-profile">
      <div className="main-info">
        <div className="avatar">
          <Image
            roundedCircle
            thumbnail
            width={100}
            height={100}
            src={user?.avatar?.url as string}
          />
          <label htmlFor="upload-photo" className="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
            />
            <div className="btn btn-upload">Tải ảnh lên</div>
          </label>
        </div>
        <hr />
        <div className="main-info-detail">
          <div>Thông tin chính</div>
          <div className="row">
            <div className="col-md-6 left col-12">
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user?.name}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={"Nguyenthaitiep206@gmail.com"}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Số CMND
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={user.personNo}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Ngày tham gia
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={convertDate(user.create_at)}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Tình trạng
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={"Đã xác thực"}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Vai trò
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={user.role?.name}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="main-info-contact">
          {" "}
          <div>Thông tin liên hệ</div>
          <div className="row">
            <div className="col-md-6 left col-12">
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Số điện thoại 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.contactUser?.phone}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Số điện thoại 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={user.contactUser?.phone}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Số CMND
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={"1802 1231 231"}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Ngày tham gia
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={"20/10/2020"}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Tình trạng
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={"Đã xác thực"}
                />
              </div>
              <div className="d-flex" style={{ marginTop: 5, marginBottom: 5 }}>
                <label
                  style={{
                    marginRight: 10,
                    width: 200,
                    verticalAlign: "middle",
                    marginTop: 6,
                  }}
                >
                  Vai trò
                </label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                  value={"Người cho thuê"}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
