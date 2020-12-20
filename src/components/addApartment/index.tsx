import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { DistrictApi } from "../../api/address/district";
import { DistrictForProvinceDto } from "../../api/address/district/dto/districtOfProvince";
import { DistrictDto } from "../../api/address/district/dto/get";
import { LocationApi } from "../../api/address/location";
import { LocationOfDistrictDto } from "../../api/address/location/dto/get";
import { ProvinceApi } from "../../api/address/province";
import { ProvinceGetDto } from "../../api/address/province/dto/get";
import { StreetApi } from "../../api/address/street";
import { StreetGetDto } from "../../api/address/street/dto/get";
import { StreetsOfDistrict } from "../../api/address/street/dto/streetInDistrict";
import { WardApi } from "../../api/address/ward";
import { WardGetDto } from "../../api/address/ward/dto/get";
import { WardsOfDistrictDto } from "../../api/address/ward/dto/wardInDistrict";
import {
  ApartmentGetDto,
  ApartmentInputDto,
} from "../../api/apartment/apartment/dto";
import { ApartmentDetailInputDto } from "../../api/apartment/apartmentDetail/dto";
import { CheckBoxInput } from "../../containers/Input/checkbox";
import { SearchFilterInput } from "../../containers/Input/searchFilter";
import { InputSelect } from "../../containers/Input/select";
import { TextFieldInput } from "../../containers/Input/textField";
import { UploadImage } from "../../containers/Input/uploadImage";
import { ChipLabel } from "../../containers/Label/chip";
import { DistrictStore } from "../../service/store/adress/district/action";
import {
  addLocation,
  apartmentInputChange,
  removeLocation,
} from "../../service/store/apartment/action";
import { RootState } from "../../store";
import { EditorComponent } from "../editor";
import "./style.scss";

interface Props {
  id?: string;
}
const dataCheck = [
  {
    value: 1,
    key: "1",
    title: "Có",
  },
  {
    value: 2,
    key: "0",
    title: "Không",
  },
];
export const AddApartment = (props: Props) => {
  const { id } = props;
  const store = useStore();
  const dispatch = useDispatch();
  const apartment = useSelector(
    (state: RootState) => state.Apartment as ApartmentGetDto
  );
  const province = useSelector((state: RootState) => state.Province.province);
  const district = useSelector(
    (state: RootState) =>
      state.District as { state: boolean; districts: DistrictForProvinceDto[] }
  );

  const common = useSelector((state: RootState) => state.Common);
  const [apartmentInput, setInput] = useState({} as ApartmentInputDto);
  const [apartmentDetailInput, setDetailInput] = useState(
    {} as ApartmentDetailInputDto
  );
  const onChangeApartment = (key: string, value: any) => {
    dispatch(apartmentInputChange({ ...apartment, [key]: value }));
  };
  const getDistrict = () => {
    return [];
  };

  return (
    <div className="add-apartment">
      <div className="main-info">
        <TextFieldInput label={"Tiêu đề"} />
        <div className="row">
          <div className="col-6">
            <InputSelect
              label={"Loại hình"}
              input={common.apartmentTypes}
              value={apartment.type?.id}
              onSelect={(e) => {}}
            />
          </div>
          <div className="col-6">
            <TextFieldInput
              label={"Giá"}
              type="number"
              end="VNĐ"
              value={apartment.price}
              onChange={(e) => {}}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <InputSelect
              input={province}
              label={"Tỉnh/TP"}
              value={apartment.province?.id}
              onSelect={(e) => {
                onChangeApartment(
                  "province",
                  province.find((i) => i.id == e)
                );
              }}
            />
          </div>
          <div className="col-md-4 col-12">
            <InputSelect input={getDistrict()} label={"Quận/huyện"} />
          </div>
          <div className="col-md-4 col-12">
            <InputSelect label={"Phường/Xã"} input={[]} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <InputSelect label={"Đường"} input={[]} />
          </div>
          <div className="col-4">
            <TextFieldInput label={"Số nhà"} value={apartment.streetNo} />
          </div>

          <div className="col-4">
            <TextFieldInput label={"Ghi chú"} />
          </div>
        </div>
      </div>

      <div className="upload">
        <UploadImage />
      </div>
      <div className="apartment-detail">
        {/* <RadioInput input={dataCheck} inline={true} /> */}
        <div className="row">
          <div className="col-4">
            <TextFieldInput
              label={"Diện tích"}
              type="number"
              end={
                <span>
                  m <sup>2</sup>
                </span>
              }
            />
          </div>
          <div className="col-4">
            <TextFieldInput label={"Giá điện"} type="number" end="/số" />
          </div>
          <div className="col-4">
            <TextFieldInput label={"Giá nước"} type="number" end="/khối" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <CheckBoxInput />
          </div>
          <div className="col-md-3 col-6">
            <CheckBoxInput />
          </div>
          <div className="col-md-3 col-6">
            <CheckBoxInput />
          </div>
          <div className="col-md-3 col-6">
            <CheckBoxInput />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputSelect
              label={"Vệ Sinh"}
              input={common.toiletTypes as []}
              flex={true}
            />
          </div>
          <div className="col-md-6">
            <InputSelect
              label={"Bếp"}
              input={common.kitchenTypes as []}
              flex={true}
            />
          </div>
        </div>
      </div>
      <div className="editer-description">
        <EditorComponent />
      </div>
      <div className="location-near">
        <SearchFilterInput
          input={[]}
          // onSelect={addLocationNear}
        />
        <div className="location-near-list d-block">
          {apartment?.LocationsNear?.map((item, index) => (
            <ChipLabel
              label={item.name}
              onDelete={() => {
                // removeLocationNear(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
