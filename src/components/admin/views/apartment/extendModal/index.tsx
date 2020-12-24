import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { ApartmentApi } from "../../../../../api/apartment/apartment";
import { PriceApi } from "../../../../../api/payment/price";
import { PriceDto } from "../../../../../api/payment/price/dto/price.get.dto";
import { InputSelect } from "../../../../../containers/Input/select";
import { handleToast } from "../../../../../service/Toast";
import { FormatNumber } from "../../../../apartment-detail-item";

interface Props {
  apartmentId?: number;
  show?: boolean;
  handleClose?: () => void;
  handleAction?: () => void;
  onSuccess?: () => void;
}

export const ExtendApartmentModal = (props: Props) => {
  const { show, handleClose, onSuccess, apartmentId } = props;
  const [dataPostPrice, setDataPostPrice] = useState([] as PriceDto[]);
  const [options, setOptions] = useState({
    pricePost: {} as PriceDto,
    apartmentId: 0,
  });
  useEffect(() => {
    setOptions({ pricePost: {}, apartmentId: apartmentId || 0 });
  }, [apartmentId]);
  const getPricePostData = () => {
    PriceApi.getAll().then((res) => {
      if (res.data.status === 200) {
        setDataPostPrice(res.data.result);
      }
    });
  };
  useEffect(() => {
    if (show) getPricePostData();
  }, [show]);
  const onSelect = (e: number) => {
    setOptions({
      ...options,
      pricePost: dataPostPrice.find((i) => i.id === e) || {},
    });
  };
  const extend = () => {
    ApartmentApi.extendApartment(apartmentId, options.pricePost.id).then(
      (res) => {
        handleToast(res.data);
        if (res.data.status === 200) {
          handleClose && handleClose();
          onSuccess && onSuccess();
        }
      }
    );
  };
  return (
    <Modal show={show} className="assignment-modal">
      <Modal.Header closeButton onClick={handleClose}>
        <Modal.Title className="text-center">Gia hạn bài đăng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputSelect
          label="Thời gian đăng bài"
          input={dataPostPrice}
          value={options.pricePost?.id}
          onSelect={onSelect}
        />
        {options.pricePost?.id ? (
          <Table
            striped
            bordered
            hover
            className="user-table"
            style={{ marginTop: 10 }}
          >
            <thead>
              <tr className={"text-center"}>
                {["Mã gói", "Thời gian", "Giá tiền"].map((item) => (
                  <th>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className={"text-center"}>
                <td>{options.pricePost.code}</td>
                <td>{options.pricePost.name}</td>
                <td>{FormatNumber(options.pricePost.price, " vnđ")}</td>
              </tr>
            </tbody>
          </Table>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Thoát
        </Button>
        <Button variant="primary" onClick={extend}>
          Lưu
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
