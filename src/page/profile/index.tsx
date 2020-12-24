import React, { useState } from "react";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { DashboardLayout } from "../../components/Profile/Layout";
import { HeaderFilter } from "../../components/Profile/header-filter";

interface Props {}

export const ProfilePage = (props: Props) => {
  return (
    <div className={"ProfilePage"}>
      <HeaderItem />
      {/* <HeaderFilter /> */}
      <div className="content">
        <DashboardLayout>
          <h2>Home Page</h2>
        </DashboardLayout>
      </div>
      <Footer />
    </div>
  );
};
