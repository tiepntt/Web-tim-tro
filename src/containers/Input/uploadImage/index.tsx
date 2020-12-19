import React, { useEffect, useState } from "react";
import ImageUploader from "react-images-upload";
import { Image } from "react-bootstrap";
import "./style.scss";
import { CarausolFooter } from "../../carausol.footer";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { RemoveCircle } from "@material-ui/icons";
interface Props {}
const handleDragStart = (e: any) => e.preventDefault();
export const UploadImage = (props: Props) => {
  const [picture, setPicture] = useState([]);
  const [urls, setUrl] = useState([]);

  const onDrop = (img: any[], pictureDataURLs: any) => {
    let oldPicture = [...picture];
    let oldUrls = [...urls];
    setUrl(oldUrls.concat(pictureDataURLs.pop()));
    setPicture(oldPicture.concat(img.pop()));
  };
  const drop = (index: number) => {
    let oldPicture = [...picture];
    let oldUrl = [...urls];
    oldUrl.splice(index, 1);
    oldPicture.splice(index, 1);
    setUrl(oldUrl);
    setPicture(oldPicture);
  };
  const getAllImage = () => {
    let items = [] as JSX.Element[];
    urls.forEach((url, index) => {
      items.push(getImage(url, index));
    });
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
  useEffect(() => {
    console.log(picture);
    console.log(urls);
  }, [picture]);
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
        {urls.length != 0 ? <CarausolFooter data={getAllImage()} /> : null}
      </div>
    </div>
  );
};
