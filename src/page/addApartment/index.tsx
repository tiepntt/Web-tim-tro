import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AddApartment } from "../../components/addApartment";
import { ApartmentDetailItem } from "../../components/apartment-detail-item";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import { RootState } from "../../store";

interface Props {}

export const AddApartmentPage = (props: Props) => {
  const apartment = useSelector((state: RootState) => state.Apartment);
  return (
    <div className={"add-apartment-page"}>
      <HeaderItem />
      <div className="content row">
        <div className="col-xl-6">
          <AddApartment />
        </div>
        <div className="col-xl-6">
          <ApartmentDetailItem apartment={apartment} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
