import {useEffect, useState} from "react";
import HeaderItem from "../../components/Navbar";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import * as React from "react";
import { ApartmentItem } from "../../containers/apartment/apartmentItem";
import { PaginationItem } from "../../containers/pagination";
import { ProfileUserInfo } from "../../components/profile-user";
import {useParams} from "react-router";
import {ApartmentDetailApi} from "../../api/apartment/apartmentDetail";
import {UserDetailDto} from "../../api/user/user/dto";
import {useHistory} from "react-router-dom";
import {UserApi} from "../../api/user/user";
import {ApartmentDto} from "../../api/apartment/apartment/dto";
import {SearchAPI} from "../../api/apartment/search";
import {setQuery} from "../../libs/constants/function/getQuery";
import {condition, ConditionDto, convertToConditionParams} from "../../api/apartment/apartment/dto/condtion";

type Props = {
};
export const ProfileUser = (props: Props) => {
  useEffect(() => {
    document.title = "Profile";
    getProfileUser(id);
    getApartmentForUser(id);
  }, []);
  const { id } = useParams() as any;
  const history = useHistory();
  const [user, setUserInfo] = useState({} as UserDetailDto);
  const [apartments, setApartment] = React.useState([] as ApartmentDto[]);
  const [searchCondition, setSearchCondition] = React.useState({
    ...condition,
  } as ConditionDto);
  const [count, setCount] = React.useState(0);
  const getProfileUser = (userId: number) => {
    UserApi.getUserProfileById(userId).then((res) => {
      if (res.data.status === 404) {
        return history.push("/404");
      }
      if (res.data.status === 200) {
        setUserInfo(res.data.result);
      }
    });
  };
  const getApartmentForUser = (userId:number) => {
    SearchAPI.getApartmentForUser(userId).then((res) => {
      if (res.data.status === 200) {
        setApartment(res.data.result.data);
      }
    });
  }
  const showApartment = (index: number) => {
    if (apartments && apartments[index])
      return (
          <li>
            <ApartmentItem apartment={apartments[index]} />
          </li>
      );
    return null;
  };
  // const onChangePage = (e: number) => {
  //   history.push({
  //     pathname: "/home",
  //     search: setQuery(
  //         convertToConditionParams({
  //           ...searchCondition,
  //           skip: (searchCondition?.take || 0) * (e - 1),
  //           page: e,
  //         })
  //     ),
  //   });
  // };
  return (
    <div className={"Home"}>
      <Container className="content">
        <ProfileUserInfo user={user} />
        <Row>
          <div className="col-lg-8 col-12">
            {apartments?.map((item, index) => showApartment(index))}
            <div className="pagination-tag">
              <PaginationItem
                  pageActive={1}
                  lastPage={Math.ceil(apartments.length / 5)}
                  // onPageChange={onChangePage}
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};