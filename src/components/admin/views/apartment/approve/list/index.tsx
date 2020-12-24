import React, { useState } from "react";
import "./style.scss";
import { ApartmentItemUser } from "../../../../../../containers/apartment/apartment.user";
interface Props {}

export const ListApartment = (props: Props) => {
  return (
    <div className="list-apartment">
      <div className="list">
        <ApartmentItemUser />
        <ApartmentItemUser />
        <ApartmentItemUser />
        <ApartmentItemUser />
        <ApartmentItemUser />
        <ApartmentItemUser />
      </div>
    </div>
  );
};
