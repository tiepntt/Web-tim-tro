import React from "react";

import { HeaderFilter } from "../header-filter";

interface Props {
  onTogle?: () => void;
}

export const Contract = (props: Props) => {
  const { onTogle } = props;
  return (
    <div>
      <HeaderFilter onTogle={onTogle} />
      <div className="contract-list " style={{}}></div>
    </div>
  );
};
