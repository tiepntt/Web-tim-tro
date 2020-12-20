import React, { useEffect, useState } from "react";
import ImageUploader from "react-images-upload";
import { Image } from "react-bootstrap";
import "./style.scss";
import { CarausolFooter } from "../../carausol.footer";
import BackspaceIcon from "@material-ui/icons/Backspace";
interface Props {
  urls?: string[];
  setPicture?: (e: any) => void;
  pictures?: [];
  setUrl?: (e: any) => void;
}
const handleDragStart = (e: any) => e.preventDefault();
export const UploadImage = (props: Props) => {
  const { urls, setPicture, pictures, setUrl } = props;
  const onDrop = (img: any[], pictureDataURLs: any) => {
    if (setUrl && urls) {
      setUrl(urls.concat(pictureDataURLs.pop()));
    }

    if (setPicture && pictures) {
      setPicture(pictures.concat(img.pop()));
    }
  };

  const drop = (index: number) => {
    if (setUrl && urls) {
      let oldUrl = [...urls];
      oldUrl.splice(index, 1);
      setUrl(oldUrl);
    }
    if (setPicture && pictures) {
      let oldPicture = [...pictures];
      oldPicture.splice(index, 1);
      setPicture(oldPicture);
    }
  };
  const getAllImage = () => {
    let items = [] as JSX.Element[];
    if (urls) {
      urls.forEach((url, index) => {
        items.push(getImage(url, index));
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
