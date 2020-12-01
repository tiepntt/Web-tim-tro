import React from "react";
import { Image } from "react-bootstrap";
import { Similar } from "../../containers/similar";
import "./style.scss";
interface Props {}

export const SideBar = (props: Props) => {
  return (
    <div className="side-bar">
      <div className="img-side-bar item">
        <Image src="https://cdn.mogi.vn/upload/banner/2020/2_83cd5e9f-c88a-490d-88af-411419916fc6.png" />
      </div>
      <div className="item">
        <Similar />
      </div>
      <div className="item">
        <Similar />
      </div>
    </div>
  );
};
