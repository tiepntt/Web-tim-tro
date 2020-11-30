// @flow
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import SearchHeader from "../../components/search-header";
import SimpleSelect from "../../components/Select";
import "./style.scss";
type Props = {};
export const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <div className={"Home"}>
      <HeaderItem />
      <SearchHeader />
      <Footer />
    </div>
  );
};
