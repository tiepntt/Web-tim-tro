import { faBars, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Route, Switch } from "react-router";
import { BodyWrapper } from "../BodyWrapper";
import { NavSidebar } from "../NavSideBar";

interface Props {
  children: any;
}

export const DashboardLayout = (props: Props) => {
  const { children } = props;
  const [activeNav, setActiveNav] = useState(true);
  return (
    <BodyWrapper>
      <div className="flex h-screen bg-gray-200">
        <NavSidebar navActive={activeNav} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <Button
              className="btn-light"
              onClick={() => {
                setActiveNav(!activeNav);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                <Switch>
                  <Route exact path="/profile">
                    <div>Thống kê</div>
                  </Route>
                  <Route exact path="/profile/post">
                    <div>Phòng trọ</div>
                  </Route>
                  <Route exact path="/profile/info">
                    <div>Thông tin cá nhân</div>
                  </Route>
                  <Route exact path="/profile/user">
                    <div>User</div>
                  </Route>
                  <Route exact path="/profile/data/location">
                    <div>Dữ liệu</div>
                  </Route>
                  <Route exact path="/profile/contract">
                    <div>Hợp đồng</div>
                  </Route>
                </Switch>
              </div>
            </section>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
