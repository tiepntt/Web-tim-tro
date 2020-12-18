import React from "react";
import { Container } from "react-bootstrap";
import { AddApartment } from "../../components/addApartment";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";

interface Props {}

export const AddApartmentPage = (props: Props) => {
  return (
    <div className={"add-apartment-page"}>
      <HeaderItem />
      <div className="content row">
        <div className="col-xl-6">
          <AddApartment />
        </div>
        <div className="col-xl-6">Review</div>
      </div>

      <Footer />
    </div>
  );
};
