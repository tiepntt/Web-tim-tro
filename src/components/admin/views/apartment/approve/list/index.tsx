import React from "react";
import "./style.scss";
import { ApartmentItemUser } from "../../../../../../containers/apartment/apartment.user";
import { ApartmentGetDto } from "../../../../../../api/apartment/apartment/dto";
interface Props {
  apartments?: ApartmentGetDto[];
}

export const ListApartment = (props: Props) => {
  const { apartments } = props;
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
