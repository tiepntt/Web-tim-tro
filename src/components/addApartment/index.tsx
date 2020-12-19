import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DistrictApi } from "../../api/address/district";
import { DistrictForProvinceDto } from "../../api/address/district/dto/districtOfProvince";
import { LocationApi } from "../../api/address/location";
import { LocationOfDistrictDto } from "../../api/address/location/dto/get";
import { ProvinceApi } from "../../api/address/province";
import { ProvinceGetDto } from "../../api/address/province/dto/get";
import { StreetApi } from "../../api/address/street";
import { StreetsOfDistrict } from "../../api/address/street/dto/streetInDistrict";
import { WardApi } from "../../api/address/ward";
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
  const dispatch = useDispatch();
  const apartment = useSelector(
    (state: RootState) => state.Apartment as ApartmentGetDto
  );

  const [apartmentInput, setInput] = useState({} as ApartmentInputDto);
  const [apartmentDetailInput, setDetailInput] = useState(
    {} as ApartmentDetailInputDto
  );
  const [address, setAddress] = useState({
    province: [] as ProvinceGetDto[],
    district: {} as DistrictForProvinceDto,
    wards: {} as WardsOfDistrictDto,
  });
  const [dataStreet, setDataStreet] = useState({} as StreetsOfDistrict);
  const [dataLocation, setDataLocation] = useState({} as LocationOfDistrictDto);
  const common = useSelector((state: RootState) => state.Common);
  const getAllProvince = () => {
    ProvinceApi.getAll().then((res) => {
      if (res.data.status === 200) {
        setAddress({ ...address, province: res.data.result });

        if (!apartment.province) {
          setInput({ ...apartmentInput, provinceId: res.data.result[0].id });
          dispatch(
            apartmentInputChange({
              ...apartment,
              province: res.data.result[0],
            })
          );
        }
      }
    });
  };
  const addLocationNear = (item: any) => {
    dispatch(addLocation(item));
  };
  const removeLocationNear = (item: any) => {
    dispatch(removeLocation(item));
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

          dispatch(
            apartmentInputChange({
              ...apartment,
              district: res.data.result.districts[0],
            })
          );
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

          dispatch(
            apartmentInputChange({
              ...apartment,
              ward: res.data.result.wards[0],
            })
          );
        }
      }
    });
  };
  const getAllLocation = () => {
    LocationApi.getAllByProvinceId(apartmentInput.provinceId).then(
      (response) => {
        if (response.data.status === 200) {
          setDataLocation(response.data.result);
          dispatch(
            apartmentInputChange({
              ...apartment,
              LocationsNear: [],
            })
          );
        }
      }
    );
  };
  const getAllStreet = () => {
    StreetApi.getAllByDistrictId(apartmentInput.districtId).then((res) => {
      if (res.data.status == 200) {
        setDataStreet(res.data.result);
        dispatch(
          apartmentInputChange({
            ...apartment,
            street: res.data.result.streets[0],
          })
        );
      }
    });
  };
  useEffect(() => {
    getAllProvince();
  }, []);
  useEffect(() => {
    getAllDistrict();
    getAllLocation();
  }, [apartmentInput.provinceId]);
  useEffect(() => {
    getAllStreet();
  }, [apartmentInput.districtId]);
  useEffect(() => {
    getAllWard();
  }, [apartmentInput.districtId]);
  const onSelectProvince = (index: number) => {
    let province = address.province.find((e) => e.id === index);
    if (province) {
      setInput({ ...apartmentInput, provinceId: province.id });
      dispatch(
        apartmentInputChange({
          ...apartment,
          province: province,
        })
      );
    }
  };
  const onSelectDistrict = (index: number) => {
    let district = address.district.districts?.find((i) => i.id === index);
    if (district) {
      setInput({
        ...apartmentInput,
        districtId: district?.id,
      });
      dispatch(
        apartmentInputChange({
          ...apartment,
          district: district,
        })
      );
    }
  };
  const onSelectWard = (index: number) => {
    let ward = address.wards.wards?.find((i) => i.id === index);
    if (ward) {
      setInput({
        ...apartmentInput,
        wardId: ward?.id,
      });
      dispatch(
        apartmentInputChange({
          ...apartment,
          ward: ward,
        })
      );
    }
  };
  const onChangeApartment = (input: any, key: string) => {
    setInput({
      ...apartmentInput,
      [key]: input,
    });
    dispatch(
      apartmentInputChange({
        ...apartment,
        [key]: input,
      })
    );
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
              onSelect={(e) => {
                onChangeApartment(
                  common.apartmentTypes.find((i) => i.id === e),
                  "type"
                );
              }}
            />
          </div>
          <div className="col-6">
            <TextFieldInput
              label={"Giá"}
              type="number"
              end="VNĐ"
              value={apartment.price}
              onChange={(e) => {
                onChangeApartment(e, "price");
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <InputSelect
              onSelect={onSelectProvince}
              input={address.province}
              label={"Tỉnh"}
              value={apartment.province?.id}
            />
          </div>
          <div className="col-md-4 col-12">
            <InputSelect
              onSelect={onSelectDistrict}
              input={address.district.districts as []}
              label={"Quận/huyện"}
              value={apartment.district?.id}
            />
          </div>
          <div className="col-md-4 col-12">
            <InputSelect
              label={"Phường/Xã"}
              input={address.wards.wards as []}
              value={apartment.ward?.id}
              onSelect={onSelectWard}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <InputSelect
              label={"Đường"}
              input={dataStreet.streets as []}
              value={apartment.street?.id}
              onSelect={(e) => {
                onChangeApartment(
                  dataStreet.streets?.find((i) => i.id === e),
                  "street"
                );
              }}
            />
          </div>
          <div className="col-4">
            <TextFieldInput
              label={"Số nhà"}
              value={apartment.streetNo}
              onChange={(e) => {
                onChangeApartment(e, "streetNo");
              }}
            />
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
          input={dataLocation.locations}
          onSelect={addLocationNear}
        />
        <div className="location-near-list d-block">
          {apartment?.LocationsNear?.map((item, index) => (
            <ChipLabel
              label={item.name}
              onDelete={() => {
                removeLocationNear(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
