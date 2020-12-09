/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useEffect, useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
interface Props {
  navActive: boolean;
}
const items = [
  {
    title: "Thống kê",
    itemId: "/profile",
    elemBefore: () => <Icon name="coffee" />,
  },
  {
    title: "Thông tin cá nhân",
    itemId: "/profile/info",
    elemBefore: () => <Icon name="coffee" />,
  },
  {
    title: "Bài đăng",
    itemId: "/profile/post",
    elemBefore: () => <Icon name="user" />,
  },
  {
    title: "Bài đăng yêu thích",
    itemId: "/profile/apartment",
    elemBefore: () => <FontAwesomeIcon icon={faHeart} color="" />,
  },
  {
    title: "Người dùng",
    itemId: "/profile/user",
    elemBefore: () => <Icon name="user" />,
  },
  {
    title: "Hợp đồng",
    itemId: "/profile/contract",
    elemBefore: () => <Icon name="coffee" />,
  },
  {
    title: "Dữ liệu",
    itemId: "/profile/data",
    elemBefore: () => <Icon name="user" />,
    subNav: [
      {
        title: "Dữ liệu tỉnh thành",
        itemId: "#",
      },
      {
        title: "Dữ liệu phòng trọ",
        itemId: "#",
      },
    ],
  },
];
export const NavSidebar = (props: Props) => {
  const history = useHistory();
  const location = useLocation();
  const { navActive } = props;
  const getClass = () => {
    return navActive ? " " : "active";
  };
  const getActiveClass = (itemTitle: string) => {
    return itemTitle === activeNavbar ? "active" : "";
  };
  const [activeNavbar, setActiveNavbar] = useState(location.pathname);
  useEffect(() => {
    setActiveNavbar(location.pathname);
  }, []);
  return (
    // <React.Fragment>
    <>
      <div>
        <div className={"vertical-nav bg-white " + getClass()} id="sidebar">
          <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-items-center">
              <img
                src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png"
                alt="..."
                width={65}
                className="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
              <div className="media-body">
                <h4 className="m-0">Jason Doe</h4>
                <p className="font-weight-light text-muted mb-0">
                  Web developer
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
            Main
          </p>
          <ul className="nav flex-column bg-white mb-0">
            {items.map((item) => {
              return (
                <li className={"nav-item " + getActiveClass(item.itemId)}>
                  <div
                    // href={item.itemId}
                    className={"nav-link text-dark font-italic d-flex "}
                    onClick={() => {
                      history.push(item.itemId);
                      setActiveNavbar(item.itemId);
                    }}
                  >
                    {item.elemBefore()}
                    <span>{item.title}</span>
                  </div>
                </li>
              );
            })}
            {/* <li className="nav-item">
              <a
                href="/profile"
                className="nav-link text-dark font-italic bg-light"
              >
                <i className="fa fa-th-large mr-3 text-primary fa-fw" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic bg-light">
                <i className="fa fa-th-large mr-3 text-primary fa-fw" />
                Hi
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-cubes mr-3 text-primary fa-fw" />
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-picture-o mr-3 text-primary fa-fw" />
                Gallery
              </a>
            </li> */}
          </ul>
          <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
            Charts
          </p>
          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic bg-light">
                <i className="fa fa-th-large mr-3 text-primary fa-fw" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic bg-light">
                <i className="fa fa-th-large mr-3 text-primary fa-fw" />
                Hi
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-cubes mr-3 text-primary fa-fw" />
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-picture-o mr-3 text-primary fa-fw" />
                Gallery
              </a>
            </li>
          </ul>
        </div>
        {/* End vertical navbar */}{" "}
      </div>
    </>
  );
};
