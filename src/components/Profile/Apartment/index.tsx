import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ApartmentItemUser } from "../../../containers/apartment/apartment.user";

import { RootState } from "../../../store";

interface Props {
  onTogle?: () => void;
}

export const ApartmentProfile = (props: Props) => {
  const history = useHistory();
  const role = useSelector(
    (state: RootState) => state.UserReducer.account?.role
  );
  useEffect(() => {
    if (!role) history.push("/login");
  }, [role]);
  return (
    <div>
      <div className="apartment-info-list " style={{}}>
        <div className="row">
          <div className="col-xl-6 col-12">
            <ApartmentItemUser />
          </div>
          <div className="col-xl-6 col-12">
            <ApartmentItemUser />
          </div>
        </div>
      </div>
    </div>
  );
};
