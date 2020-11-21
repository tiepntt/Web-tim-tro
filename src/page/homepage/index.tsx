// @flow
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderItem from "../../components/Navbar";
import "./style.scss";
type Props = {};
export const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <div className={"Home"}>
      <HeaderItem />
    </div>
  );
};
