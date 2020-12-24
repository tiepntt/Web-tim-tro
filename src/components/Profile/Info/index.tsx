import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useStore } from "react-redux";
import { ContactApi } from "../../../api/user/contactUser";
import { UserApi } from "../../../api/user/user";
import { UserDetailDto } from "../../../api/user/user/dto";
import { convertDate } from "../../../libs/constants/function/time";
import { handleToast } from "../../../service/Toast";
import { HeaderFilter } from "../header-filter";
import "./style.scss";
import { loadInfoUser } from "../../../loader/loaderInfoUser";
interface Props {
  onTogle?: () => void;
}

export const InfoProfile = (props: Props) => {
  const store = useStore();
  const { onTogle } = props;
  const [update, setUpdate] = useState(false);
  const [showUpdate, setUpdateInfo] = useState({
    info: false,
    contact: false,
  });
  const [user, setUserInfo] = useState({} as UserDetailDto);
  const [image, setImage] = useState(
    user?.avatar?.url ??
      ("https://www.avatarins.com/image/homesmall.png" as any)
  );
  useEffect(() => {
    UserApi.getInfo().then((response) => {
      if (response.data.status !== 200)
        return handleToast(response.data.status);
      setUserInfo(response.data.result);
    });
  }, [update]);
  const updateInfo = () => {
    UserApi.update(user).then((res) => {
      handleToast(res.data);
      setUpdateInfo({ ...showUpdate, info: false });
      setUpdate(!update);
      if (res.data.status === 200) {
        loadInfoUser(store, user.id || 0);
      }
    });
  };
  const updateContact = () => {
    if (user.contactUser?.id) {
      ContactApi.update(user.contactUser).then((res) => {
        handleToast(res.data);
        setUpdateInfo({ ...showUpdate, contact: false });
        setUpdate(!update);
      });
    } else {
      ContactApi.create(user.contactUser).then((res) => {
        handleToast(res.data);
        setUpdateInfo({ ...showUpdate, contact: false });
        setUpdate(!update);
      });
    }
  };
  return (
    <>
      <div className="info-profile">
        <div className="main-info">
          <div className="avatar">
            <Image
              roundedCircle
              thumbnail
              width={100}
              height={100}
              src={image}
            />
            <label htmlFor="upload-photo" className="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                onChange={(e: any) => {
                  console.log(e.target.files[0]);
                  setImage(e.target.files[0]);
                }}
              />
              <div className="btn btn-upload">Tải ảnh lên</div>
            </label>
          </div>
          <hr />
          <div className="main-info-detail">
            <div>Thông tin chính</div>
            <div className="row">
              <div className="col-md-6 left col-12">
                <div className="d-flex">
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user?.name}
                    onChange={(e) => {
                      setUpdateInfo({ ...showUpdate, info: true });
                      setUserInfo({ ...user, name: e.target.value });
                    }}
                  />
                </div>
                <div className="d-flex">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.email}
                    onChange={(e) => {
                      setUpdateInfo({ ...showUpdate, info: true });
                      setUserInfo({ ...user, email: e.target.value });
                    }}
                  />
                </div>
                <div className="d-flex">
                  <label>Số CMND</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={user.personNo}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="d-flex">
                  <label>Ngày tham gia</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={convertDate(user.create_at)}
                  />
                </div>
                <div className="d-flex">
                  <label>Tình trạng</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={user.isApprove ? "Đã xác thực" : "Chưa xác thực"}
                  />
                </div>
                <div className="d-flex">
                  <label>Vai trò</label>
                  <input
                    type="text"
                    className="form-control"
                    disabled
                    value={user.role?.name}
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-block"
              hidden={!showUpdate.info}
              onClick={updateInfo}
            >
              Cập nhật
            </button>
          </div>
          <hr />
          <div className="main-info-contact">
            {" "}
            <div>Thông tin liên hệ</div>
            <div className="row">
              <div className="col-md-6 left col-12">
                <div className="d-flex">
                  <label>Số điện thoại 1</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.contactUser?.phone}
                    onChange={(e) => {
                      setUpdateInfo({ ...showUpdate, contact: true });
                      setUserInfo({
                        ...user,
                        contactUser: {
                          ...user.contactUser,
                          phone: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div className="d-flex">
                  <label>Số điện thoại 2</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.contactUser?.phone2}
                    onChange={(e) => {
                      setUpdateInfo({ ...showUpdate, contact: true });
                      setUserInfo({
                        ...user,
                        contactUser: {
                          ...user.contactUser,
                          phone2: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="d-flex">
                  <label>Email liên hệ</label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.contactUser?.email}
                    onChange={(e) => {
                      setUpdateInfo({ ...showUpdate, contact: true });
                      setUserInfo({
                        ...user,
                        contactUser: {
                          ...user.contactUser,
                          email: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
                <div className="d-flex">
                  <label>Địa chỉ </label>
                  <input
                    type="text"
                    className="form-control"
                    value={user.contactUser?.address}
                    onChange={(e) => {
                      setUpdateInfo({ ...showUpdate, contact: true });
                      setUserInfo({
                        ...user,
                        contactUser: {
                          ...user.contactUser,
                          address: e.target.value,
                        },
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              hidden={!showUpdate.contact}
              onClick={updateContact}
            >
              Cập nhật
            </button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
