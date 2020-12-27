import React from "react";
import "./style.scss";
import { ApartmentItemUser } from "../../../../../../containers/apartment/apartment.user";
import { ApartmentGetDto } from "../../../../../../api/apartment/apartment/dto";
import { Divider } from "@material-ui/core";
interface Props {
  apartments?: ApartmentGetDto[];
  type?: string;
  openModel?: (i: number) => void;
}

export const ListApartment = (props: Props) => {
  const { apartments, type } = props;
  return (
    <div className="list-apartment">
      <div className="list">
        {apartments
          ? apartments.map((item) => (
              <>
                <ApartmentItemUser
                  apartment={item}
                  type={type}
                  openModel={props.openModel}
                />
                <Divider />
              </>
            ))
          : null}
      </div>
    </div>
  );
};
