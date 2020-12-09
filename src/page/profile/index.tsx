import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import { Profile } from "../../components/Profile";
import "./style.scss";
import SearchHeader from "../../components/search-header";

interface Props {}

export const ProfilePage = (props: Props) => {
  return (
    <div className={"profile-page"}>
      <HeaderItem />
      <div className="content row">
        <div className="col-md-10 col-12">
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
};
