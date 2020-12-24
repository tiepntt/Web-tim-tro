import React from "react";
import { Image } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.scss";

const handleDragStart = (e: any) => e.preventDefault();
const respoinsive = {
  0: {
    items: 1,
  },
  1024: {
    items: 4,
  },
};

const items = [
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/10/28/363/101e10d976d14aa5a7d27bc7649ea263.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/11/11/183/704bb04d93364def8ef048973dc0a5ce.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/11/11/183/704bb04d93364def8ef048973dc0a5ce.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/10/28/363/101e10d976d14aa5a7d27bc7649ea263.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/10/28/363/101e10d976d14aa5a7d27bc7649ea263.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/10/28/363/101e10d976d14aa5a7d27bc7649ea263.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/10/28/363/101e10d976d14aa5a7d27bc7649ea263.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
  <div className="item">
    <Image
      src="https://cloud.mogi.vn/images/2020/10/28/363/101e10d976d14aa5a7d27bc7649ea263.jpg"
      onDragStart={handleDragStart}
      className="yours-custom-class"
      thumbnail
    />
  </div>,
];
interface Props {
  data?: any[];
}

export const CarausolFooter = (props: Props) => {
  const { data } = props;
  return (
    <AliceCarousel
      mouseTracking
      items={data || items}
      responsive={respoinsive}
    />
  );
};
