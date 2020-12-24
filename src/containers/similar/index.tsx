import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.scss";
interface Props {}

export const Similar = (props: Props) => {
  return (
    <div className="similar">
      <div className="title">Loại Nhà trọ</div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faAngleDoubleRight} color={"#1b998a"} />
          <span>Chung cư Mini (230)</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleDoubleRight} color={"#1b998a"} />
          <span>Chung cư Mini (230)</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleDoubleRight} color={"#1b998a"} />
          <span>Chung cư Mini (230)</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleDoubleRight} color={"#1b998a"} />
          <span>Chung cư Mini (230)</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleDoubleRight} color={"#1b998a"} />
          <span>Chung cư Mini (230)</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faAngleDoubleRight} color={"#1b998a"} />
          <span>Chung cư Mini (230)</span>
        </li>
      </ul>
    </div>
  );
};
