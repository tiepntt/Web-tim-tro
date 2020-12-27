import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import { SideBarApartment } from "../../components/SideBarApartment";
import { CarausolFooter } from "../../containers/carausol.footer";
import "./style.scss";
import { CommentItem } from "../../containers/apartment/commentItem";
import { CommentInput } from "../../components/comment-input";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ApartmentGetDto } from "../../api/apartment/apartment/dto";
import { ApartmentDetailItem } from "../../components/apartment-detail-item";
import { ApartmentDetailApi } from "../../api/apartment/apartmentDetail";
import { CommentComponent } from "../../components/comment";

interface Props {}

export const ApartmentDetail = (props: Props) => {
  const { params } = useRouteMatch();
  const history = useHistory();
  const { id } = params as any;
  const [apartment, setApartment] = useState({} as ApartmentGetDto);
  useEffect(() => {
    document.title = "Apartment";
    getApartment(id);
  }, [id]);

  const getApartment = (apartmentId: number) => {
    ApartmentDetailApi.getByApartmentId(apartmentId).then((res) => {
      if (res.data.status === 404) {
        return history.push("/404");
      }
      if (res.data.status === 200) {
        setApartment(res.data.result);
      }
    });
  };
  return (
    <div className={"apartment-detail"}>
      <Container className="content">
        <Row>
          <div className="col-lg-8 col-12">
            <ApartmentDetailItem apartment={apartment} />
          </div>
          <div className="col-lg-4 col-12 sidebar-component">
            <SideBarApartment user={apartment?.user} />
          </div>
        </Row>
      </Container>
    </div>
  );
};
