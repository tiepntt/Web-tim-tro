import React from "react";
import "./style.scss";
interface Props {
  icon?: any;
  label?: any;
}

export const LabelIcon = (props: Props) => {
  const { icon, label } = props;
  return (
    <>
      <span className="icon-label">{icon || label}</span>
      <span className="label-icon">{label}</span>
    </>
  );
};
