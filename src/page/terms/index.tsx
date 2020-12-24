import {useEffect} from "react";
import HeaderItem from "../../components/Navbar";
import {Container} from "react-bootstrap";
import Footer from "../../components/Footer";
import * as React from "react";
import Terms from "../../components/terms";

type Props = {};
export const Term = (props: Props) => {
    useEffect(() => {
        document.title = "Điều khoản";
    }, []);
    return (
        <div className={"Term"}>
            <HeaderItem/>
            <Container className="content">
                <Terms/>
            </Container>
            <Footer/>
        </div>

    );
}