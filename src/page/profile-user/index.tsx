import {useEffect, useState} from "react";
import HeaderItem from "../../components/Navbar";
import {Container, Image, Row} from "react-bootstrap";
import Footer from "../../components/Footer";
import * as React from "react";
import {ApartmentItem} from "../../containers/apartment/apartmentItem";
import {PaginationItem} from "../../containers/pagination";
import {ProfileUserInfo} from "../../components/profile-user";
import {useParams} from "react-router";
import {ApartmentDetailApi} from "../../api/apartment/apartmentDetail";
import {UserDetailDto} from "../../api/user/user/dto";
import {useHistory} from "react-router-dom";
import {UserApi} from "../../api/user/user";
import {ApartmentDto} from "../../api/apartment/apartment/dto";
import {SearchAPI} from "../../api/apartment/search";
import {setQuery} from "../../libs/constants/function/getQuery";
import {condition, ConditionDto, convertToConditionParams} from "../../api/apartment/apartment/dto/condtion";
import {Apartment} from "../../components/apartment";
import {Grid} from "@material-ui/core";
import "./style.scss";


type Props = {};
export const ProfileUser = (props: Props) => {
    const {id} = useParams() as any;
    const history = useHistory();
    const [user, setUserInfo] = useState({} as UserDetailDto);
    const [apartments, setApartment] = React.useState([] as ApartmentDto[]);
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
    const getApartmentForUser = (conditionSearch: any) => {
        SearchAPI.getApartmentForUser(conditionSearch).then((res) => {
            if (res.data.status === 200) {
                setApartment(res.data.result.data);
                setCount(res.data.result.count);
            }
        });
    }
    const showApartment = (index: number) => {
        if (apartments && apartments[index])
            return (
                <li>
                    <ApartmentItem apartment={apartments[index]}/>
                </li>
            );
        return null;
    };
    const [conditionSearch, setCondition] = useState({
        userId: id,
        page: 1,
        take: 5,
        skip: 0,
    });
    const onChangePage = (e: number) => {
        setCondition({
            ...conditionSearch,
            page: e,
            skip: (e - 1) * conditionSearch.take,
        });
    };

    useEffect(() => {
        document.title = "Profile";
        getProfileUser(id);
        getApartmentForUser(conditionSearch);
    }, [conditionSearch]);
    return (
        <div className={"Home"}>
            <Container className="content ">
                <Row>
                    <div className="back-ground col-md-8 col-12">
                        <ProfileUserInfo user={user}/>
                        {apartments?.map((item, index) => showApartment(index))}
                        <div className="pagination-tag">
                            <PaginationItem
                                pageActive={conditionSearch.page}
                                lastPage={Math.ceil(count / conditionSearch.take)}
                                onPageChange={onChangePage}
                            />
                        </div>
                    </div>
                    <div className={"img-poster  col-md-4 col-12"}>

                        <Image
                            className={"image-apartment"}
                            src={process.env.PUBLIC_URL + "/assets/logo.gif"}
                        ></Image>
                    </div>
                </Row>
            </Container>
        </div>
    );
};