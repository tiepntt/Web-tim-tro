import React, { useEffect, useState } from "react";
import ImageUploader from "react-images-upload";
import { Image } from "react-bootstrap";
import "./style.scss";
import { CarausolFooter } from "../../carausol.footer";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { ApartmentImageDto } from "../../../api/image/apartmentImages";
interface Props {
  urls?: ApartmentImageDto[];
  dropImg?: (id: number) => void;
  addImg?: (file: any) => void;
}
const handleDragStart = (e: any) => e.preventDefault();
export const UploadImage = (props: Props) => {
  const { urls, dropImg, addImg } = props;
  const onDrop = (img: any[], pictureDataURLs: any) => {
    if (addImg) {
      addImg(img.pop());
      // addImg(img;
    }
  };

  const drop = (index: number) => {
    if (dropImg) dropImg(index);
  };
  const getAllImage = () => {
    let items = [] as JSX.Element[];
    if (urls) {
      urls.forEach((url) => {
        items.push(getImage(url.url, url?.id || 0));
      });
    }
    return items;
  };
  const getImage = (url: any, index: number) => {
    return (
      <div className="item">
        <Image
          src={url}
          onDragStart={handleDragStart}
          className="yours-custom-class"
          thumbnail
        />
        <div className="icon" onClick={() => drop(index)}>
          <BackspaceIcon />
        </div>
      </div>
    );
  };
  return (
    <div className="upload">
      <ImageUploader
        withIcon={false}
        withLabel={false}
        buttonText="Chọn ảnh"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <div className="privew">
        {urls && urls.length !== 0 ? (
          <CarausolFooter data={getAllImage()} />
        ) : null}
      </div>
    </div>
  );
};
