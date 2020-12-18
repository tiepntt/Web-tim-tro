import SelectInput from "@material-ui/core/Select/SelectInput";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DistrictApi } from "../../api/address/district";
import { DistrictForProvinceDto } from "../../api/address/district/dto/districtOfProvince";
import { ProvinceApi } from "../../api/address/province";
import { ProvinceGetDto } from "../../api/address/province/dto/get";
import { StreetApi } from "../../api/address/street";
import { StreetsOfDistrict } from "../../api/address/street/dto/streetInDistrict";
import { WardApi } from "../../api/address/ward";
import { WardsOfDistrictDto } from "../../api/address/ward/dto/wardInDistrict";
import { ApartmentInputDto } from "../../api/apartment/apartment/dto";
import { CheckBoxInput } from "../../containers/Input/checkbox";
import { RadioInput } from "../../containers/Input/radio";
import { InputSelect } from "../../containers/Input/select";
import { TextFieldInput } from "../../containers/Input/textField";
import { UploadImage } from "../../containers/Input/uploadImage";
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
  const apartment = useSelector((state: RootState) => state.Apartment);
  const [apartmentInput, setInput] = useState({} as ApartmentInputDto);
  const [address, setAddress] = useState({
    province: [] as ProvinceGetDto[],
    district: {} as DistrictForProvinceDto,
    wards: {} as WardsOfDistrictDto,
  });
  const [dataStreet, setDataStreet] = useState({} as StreetsOfDistrict);
  const common = useSelector((state: RootState) => state.Common);
  const getAllProvince = () => {
    ProvinceApi.getAll().then((res) => {
      if (res.data.status === 200) {
        setAddress({ ...address, province: res.data.result });
        setInput({ ...apartmentInput, provinceId: res.data.result[0].id });
      }
    });
  };
  const getAllDistrict = () => {
    DistrictApi.getAllByProvinceId(apartmentInput.provinceId).then((res) => {
      if (res.data.status === 200) {
        setAddress({
          ...address,
          district: res.data.result,
          wards: {} as WardsOfDistrictDto,
        });
        setDataStreet({});
        if (res.data.result.districts[0]) {
          setInput({
            ...apartmentInput,
            districtId: res.data.result.districts[0].id,
          });
        }
      }
    });
  };
  const getAllWard = () => {
    WardApi.getAllByDistrictId(apartmentInput.districtId).then((res) => {
      if (res.data.status === 200) {
        setAddress({ ...address, wards: res.data.result });
        if (res.data.result.wards.length != 0) {
          setInput({
            ...apartmentInput,
            wardId: res.data.result.wards[0].id,
          });
        }
      }
    });
  };
  const getAllLocation = () => {};
  const getAllStreet = () => {
    StreetApi.getAllByDistrictId(apartmentInput.districtId).then((res) => {
      if (res.data.status == 200) {
        setDataStreet(res.data.result);
      }
    });
  };
  useEffect(() => {
    getAllProvince();
  }, []);
  useEffect(() => {
    getAllDistrict();
  }, [apartmentInput.provinceId]);
  useEffect(() => {
    getAllStreet();
  }, [apartmentInput.districtId]);
  useEffect(() => {
    getAllWard();
  }, [apartmentInput.districtId]);
  const onSelectProvince = (index: number) => {
    setInput({ ...apartmentInput, provinceId: address.province[index].id });
  };
  const onSelectDistrict = (index: number) => {
    setInput({
      ...apartmentInput,
      districtId: (address as any).district.districts[index].id,
    });
  };
  return (
    <div className="add-apartment">
      <div className="main-info">
        <TextFieldInput label={"Tiêu đề"} />
        <div className="row">
          <div className="col-6">
            <InputSelect label={"Loại hình"} input={common.apartmentTypes} />
          </div>
          <div className="col-6">
            <TextFieldInput label={"Giá"} type="number" end="VNĐ" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <InputSelect
              onSelect={onSelectProvince}
              input={address.province}
              label={"Tỉnh"}
            />
          </div>
          <div className="col-md-4 col-12">
            <InputSelect
              onSelect={onSelectDistrict}
              input={address.district.districts}
              label={"Quận/huyện"}
            />
          </div>
          <div className="col-md-4 col-12">
            <InputSelect label={"Phường/Xã"} input={address.wards.wards} />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <InputSelect label={"Đường"} input={dataStreet.streets} />
          </div>
          <div className="col-4">
            <TextFieldInput label={"Số nhà"} />
          </div>

          <div className="col-4">
            <TextFieldInput label={"Ghi chú"} />
          </div>
        </div>
      </div>
      <div className="editer-description">
        <EditorComponent />
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
          <div className="col-md-4">
            <CheckBoxInput />
          </div>
          <div className="col-md-4">
            <CheckBoxInput />
          </div>
          <div className="col-md-4">
            <CheckBoxInput />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <InputSelect label={"Vệ Sinh"} input={common.apartmentTypes} />
          </div>
          <div className="col-md-4">
            <InputSelect label={"Bếp"} input={common.apartmentTypes} />
          </div>
        </div>
      </div>
    </div>
  );
};
