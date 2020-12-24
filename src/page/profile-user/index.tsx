import {useEffect} from "react";
import HeaderItem from "../../components/Navbar";
import {Container, Row} from "react-bootstrap";
import Footer from "../../components/Footer";
import * as React from "react";
import {ApartmentItem} from "../../containers/apartment/apartmentItem";
import {PaginationItem} from "../../containers/pagination";
import { ProfileUserInfo } from "../../components/profile-user";

type Props = {};
export const ProfileUser = (props: Props) => {
    useEffect(() => {
        document.title = "Profile";
    }, []);
    return (
        <div className={"Home"}>
            <HeaderItem/>
            <Container className="content">
                <ProfileUserInfo/>
                <Row>
                    <div className="col-lg-8 col-12">
                        <li>
                            <ApartmentItem
                                avatar="https://cloud.mogi.vn/images/2020/08/18/120/f9bc95cb39d5462887620d0afd860634.jpg"/>
                        </li>
                        <li>
                            <ApartmentItem
                                avatar="https://cloud.mogi.vn/images/2020/11/09/368/2f98c1ec352f419db14344b46415b315.jpg"/>
                        </li>
                        <li>
                            <ApartmentItem
                                avatar="https://cloud.mogi.vn/images/2020/07/02/581/72fc9f434e474b429273663a032d12de.jpg"/>
                        </li>
                        <li>
                            <ApartmentItem
                                avatar="https://cloud.mogi.vn/images/2020/07/22/376/44bdbe8040e54218ba9c2bd5f3080d2a.jpg"/>
                        </li>
                        <div className="pagination-tag">
                            <PaginationItem pageActive={1} lastPage={10}/>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer/>
        </div>

    );
}
