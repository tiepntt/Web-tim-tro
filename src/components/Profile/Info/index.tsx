import React from "react";
import { Image } from "react-bootstrap";
import "./style.scss";
interface Props {}

export const InfoProfile = (props: Props) => {
  return (
    <div className="info-profile">
      <div className="main-info">
        <div className="avatar">
          <Image
            roundedCircle
            thumbnail
            width={100}
            height={100}
            src="https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/129840333_830838227740988_4120573807075780201_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=xaiZ2MnbanAAX8BvElj&_nc_ht=scontent.fhan5-7.fna&oh=e2edb97e674feb17bc51fc16b143610f&oe=5FF8C13C"
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
                  value={"Nguyễn Thái Tiệp"}
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
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={"Nguyễn Thái Tiệp"}
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
