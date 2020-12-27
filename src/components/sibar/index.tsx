import { makeStyles, useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { SearchAPI } from "../../api/apartment/search";
import { Similar } from "../../containers/similar";
import { setQuery } from "../../libs/constants/function/getQuery";
import "./style.scss";
interface Props {}

export const SideBar = (props: Props) => {
  const history = useHistory();
  const [listCountByType, setListCountByType] = useState(
    [] as { id: number; name: string; count: number }[]
  );
  const [listCountByDistrict, setListCountByDistrict] = useState(
    [] as { id: number; name: string; count: number }[]
  );
  const getListCountByType = () => {
    SearchAPI.getCountByType().then((res) => {
      setListCountByType(res.data.result || []);
    });
  };
  const getListCountByDistrict = () => {
    SearchAPI.getCountByDistrict().then((res) => {
      setListCountByDistrict(res.data.result || []);
    });
  };
  const selectFilter = (key: string, value: any) => {
    history.push({
      pathname: "/home",
      search: setQuery({
        [key]: value,
      }),
    });
  };
  useEffect(() => {
    getListCountByType();
    getListCountByDistrict();
  }, []);
  return (
    <div className="side-bar">
      <div className="img-side-bar ">
        <Image src={process.env.PUBLIC_URL + "/assets/logo.gif"} />
      </div>
      <div className="item">
        <Similar
          list={listCountByType}
          title="Loại hình nhà trọ"
          onClick={(e) => {
            selectFilter("apartmentTypeId", e);
          }}
        />
      </div>
      <div className="item">
        <Similar
          list={listCountByDistrict}
          title="Nhà trọ cho thuê tại các khu vực"
          onClick={(e) => {
            selectFilter("districtId", e);
          }}
        />
      </div>
    </div>
  );
};
