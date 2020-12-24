import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Paper } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useStore } from "react-redux";

import { DistrictForProvinceDto } from "../../api/address/district/dto/districtOfProvince";

import {
  condition,
  ConditionDto,
} from "../../api/apartment/apartment/dto/condtion";
import { SearchFilterInput } from "../../containers/Input/searchFilter";
import { loadapartmentType } from "../../loader/loadDataApartment";
import { addDistrict } from "../../loader/loadDataDistrict";
import { RootState } from "../../store";
import "./style.scss";
import { HintDto } from "../../api/apartment/hint/dto/hint.dto";
import { HintApi } from "../../api/apartment/hint";
import { DropDownInput } from "../../containers/Input/dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 2px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

interface Props {
  onChangeCondition: (key: string, value: any) => void;
  filter?: ConditionDto;
  onChangeFilter: (e: any) => void;
}
const filterPrice = [
  {
    name: "Dưới 1 triệu",
    maxPrice: 1000000,
    minPrice: 0,
    id: 1,
  },
  {
    name: "Từ 1 - 2 triệu",
    maxPrice: 2000000,
    minPrice: 1000000,
    id: 2,
  },
  {
    name: "Từ 2 - 4 triệu",
    maxPrice: 4000000,
    minPrice: 2000000,
    id: 3,
  },
  {
    name: "Trên 4 triệu",
    maxPrice: 100000000,
    minPrice: 4000000,
    id: 4,
  },
];
const filterArea = [
  {
    name: "Dưới 20m2",
    maxS: 20,
    minS: 0,
    id: 1,
  },
  {
    name: "Từ 20 - 35m2",
    maxS: 35,
    minS: 20,
    id: 2,
  },

  {
    name: "Trên 35m2",
    maxS: 10000,
    minS: 35,
    id: 3,
  },
];
const SearchHeader = (props: Props) => {
  const { onChangeCondition, filter, onChangeFilter } = props;
  const [hintState, setHintState] = useState([] as HintDto[]);
  const store = useStore();
  const district = useSelector(
    (state: RootState) =>
      state.District as { state: boolean; districts: DistrictForProvinceDto[] }
  );

  const common = useSelector((state: RootState) => state.Common);
  const classes = useStyles();
  const getDistrict = () => {
    let districtData = district.districts.find(
      (i) => i.id === filter?.provinceId
    );
    if (!districtData) {
      if (!district.state) {
        addDistrict(store, filter?.provinceId || 0);
      }
      return [];
    }
    return districtData.districts as [];
  };
  const getApartmentType = () => {
    if (common.apartmentTypes.length !== 0) {
      return common.apartmentTypes;
    }
    loadapartmentType(store);
    return [];
  };

  const getValuePrice = () => {
    let price = filterPrice.find(
      (i) => i.maxPrice === filter?.maxPrice && filter?.minPrice === i.minPrice
    );

    return price ? price.id : 0;
  };
  const getValueS = () => {
    let S = filterArea.find(
      (i) => i.maxS === filter?.maxS && filter?.minS === i.minS
    );
    return S ? S.id : 0;
  };
  const getHint = (e: string) => {
    HintApi.getHint({ key: e, take: 10 }).then((res) => {
      if (res.data.status === 200) setHintState(res.data.result);
      else setHintState([]);
    });
  };
  const getValueType = () => {
    return common.apartmentTypes.find((i) => i.id === filter?.apartmentTypeId)
      ?.id;
  };
  return (
    <div className="searh-header">
      <Container className="container-header">
        <h1 className="header-search-title">
          Đúng nhà, đúng giá, đúng thời điểm
        </h1>
        <div className={"border"}>
          <Row>
            <Col lg={4} xs={12}>
              <Paper className={classes.root}>
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <FontAwesomeIcon icon={faSearch} size="sm" />
                </IconButton>
                <SearchFilterInput
                  onChange={getHint}
                  onSelect={(e: any) => {
                    onChangeCondition("key", e?.name || e);
                  }}
                  input={hintState}
                  placeHolder="Từ khóa,địa chỉ hoặc địa danh"
                />
              </Paper>
            </Col>
            <Col lg={2} xs={6}>
              <DropDownInput
                input={getDistrict()}
                value={filter?.districtId || 0}
                onSelect={(e) => {
                  onChangeCondition("districtId", e);
                }}
                label="Khu vực"
              />
            </Col>
            <Col lg={2} xs={6}>
              <DropDownInput
                input={filterPrice}
                value={getValuePrice()}
                label="Giá thuê"
                onSelect={(e) => {
                  let price = filterPrice.find((i) => i.id === e);
                  e
                    ? onChangeFilter({
                        ...filter,
                        maxPrice: price?.maxPrice,
                        minPrice: price?.minPrice,
                        page: 1,
                        skip: 0,
                      })
                    : onChangeFilter({
                        ...filter,
                        maxPrice: condition.maxPrice,
                        minPrice: condition.minPrice,
                        page: 1,
                        skip: 0,
                      });
                }}
              />
            </Col>
            <Col lg={2} xs={6}>
              <DropDownInput
                input={filterArea}
                value={getValueS()}
                label="Diện tích"
                onSelect={(e) => {
                  let S = filterArea.find((i) => i.id === e);
                  e
                    ? onChangeFilter({
                        ...filter,
                        maxS: S?.maxS,
                        minS: S?.minS,
                        page: 1,
                        skip: 0,
                      })
                    : onChangeFilter({
                        ...filter,
                        maxS: 10000000000,
                        minS: 0,
                        page: 1,
                        skip: 0,
                      });
                }}
              />
            </Col>
            <Col lg={2} xs={6}>
              <DropDownInput
                input={getApartmentType()}
                value={getValueType()}
                label="Loại hình"
                onSelect={(e) => onChangeCondition("apartmentTypeId", e)}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SearchHeader;
