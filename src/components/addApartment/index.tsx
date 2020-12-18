import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DistrictApi } from "../../api/address/district";
import { DistrictForProvinceDto } from "../../api/address/district/dto/districtOfProvince";
import { ProvinceApi } from "../../api/address/province";
import { ProvinceGetDto } from "../../api/address/province/dto/get";
import { WardApi } from "../../api/address/ward";
import { WardsOfDistrictDto } from "../../api/address/ward/dto/wardInDistrict";
import { ApartmentInputDto } from "../../api/apartment/apartment/dto";
import { InputSelect } from "../../containers/Input/select";
import { TextFieldInput } from "../../containers/Input/textField";
import { RootState } from "../../store";

interface Props {
  id?: string;
}

export const AddApartment = (props: Props) => {
  const { id } = props;
  const apartment = useSelector((state: RootState) => state.Apartment);
  const [apartmentInput, setInput] = useState({} as ApartmentInputDto);
  const [address, setAddress] = useState({
    province: [] as ProvinceGetDto[],
    district: {} as DistrictForProvinceDto,
    wards: {} as WardsOfDistrictDto,
  });
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
          wards: [] as WardsOfDistrictDto,
        });
        if (res.data.result.districts.length != 0) {
          setInput({
            ...apartmentInput,
            districtId: res.data.result.districts[0].id,
          });
        }
      }
    });
  };
  const getAllWard = () => {
    WardApi.getAllByDistrictId(apartmentInput.provinceId).then((res) => {
      if (res.data.status === 200) {
        setAddress({ ...address, wards: res.data.result });
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
    </div>
  );
};
