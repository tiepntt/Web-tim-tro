import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddApartment } from "../../components/addApartment";
import { ApartmentDetailItem } from "../../components/apartment-detail-item";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import { RootState } from "../../store";
import { useHistory, useParams } from "react-router";
import { ApartmentDetailApi } from "../../api/apartment/apartmentDetail";
import {
  apartmentClear,
  apartmentInputChange,
} from "../../service/store/apartment/action";

interface Props {
  type?: "edit" | "add";
}

export const AddApartmentPage = (props: Props) => {
  const { type } = props;
  const apartment = useSelector((state: RootState) => state.Apartment);
  const { id } = useParams() as any;
  const history = useHistory();
  const dispatch = useDispatch();
  const getApartment = (apartmentId: number) => {
    ApartmentDetailApi.getByApartmentId(apartmentId).then((res) => {
      if (res.data.status === 404) {
        return history.push("/404");
      }
      if (res.data.status === 200) {
        dispatch(apartmentInputChange(res.data.result));
      }
    });
  };
  const clearApartment = () => {
    dispatch(apartmentClear());
  };
  useEffect(() => {
    if (type === "edit") {
      if (id) getApartment(id);
    } else {
      if (apartment.id) clearApartment();
    }
  }, [id]);
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
