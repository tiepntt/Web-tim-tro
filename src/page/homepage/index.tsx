// @flow
import * as React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ApartmentDto } from "../../api/apartment/apartment/dto";
import {
  condition,
  ConditionDto,
} from "../../api/apartment/apartment/dto/condtion";
import { SearchAPI } from "../../api/apartment/search";
import { Apartment } from "../../components/apartment";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import SearchHeader from "../../components/search-header";
import { SideBar } from "../../components/sibar";

import "./style.scss";
type Props = {};
export const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);
  const [searchCondition, setSearchCondition] = React.useState({
    ...condition,
  } as ConditionDto);
  const [apartments, setApartment] = React.useState([] as ApartmentDto[]);
  const [count, setCount] = React.useState(0);
  const [key, setKey] = useState("");
  const Search = () => {
    SearchAPI.search(searchCondition).then((res) => {
      if (res.data.status === 200) {
        setApartment(res.data.result.data);
        setCount(res.data.result.count);
      }
    });
  };
  useEffect(() => {
    Search();
  }, [searchCondition]);
  const onChangePage = (e: number) => {
    setSearchCondition({
      ...searchCondition,
      skip: (searchCondition?.take || 0) * (e - 1),
      page: e,
    });
  };
  const onChangeCondition = (key: string, value: any) => {
    setSearchCondition({ ...searchCondition, [key]: value, page: 1, skip: 0 });
  };
  const onChangeState = (e: any) => {
    setSearchCondition(e);
  };
  return (
    <div className={"Home"}>
      <HeaderItem />
      <SearchHeader
        filter={searchCondition}
        onChangeCondition={onChangeCondition}
        onChangeFilter={onChangeState}
      />
      <Container className="content">
        <Row>
          <div className="col-lg-8 col-12">
            <Apartment
              page={searchCondition.page || condition.page}
              count={count}
              onChangePage={onChangePage}
              take={searchCondition.take || condition.take}
              apartments={apartments}
            />
          </div>
          <div className="col-lg-4 col-12">
            <SideBar />
          </div>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
