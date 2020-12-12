import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { SearchItem } from "../../../containers/Search";
import { SelectItem } from "../../../containers/Select";
import "./style.scss";

interface Props {
  onTogle?: () => void;
  filter?: {
    title?: string;
    data?: {
      key?: string;
      event?: any;
    }[];
  };
}

export const HeaderFilter = (props: Props) => {
  const { onTogle, filter } = props;
  return (
    <div className="d-flex header-filter">
      <Button style={{ backgroundColor: "transparent" }} onClick={onTogle}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Button>

      <SearchItem />
      <SelectItem data={filter?.data} />
      {filter ? () => <div></div> : null}
    </div>
  );
};
