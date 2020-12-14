import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddIcon } from "@material-ui/data-grid";
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
      value?: string;
    }[];
  };
  onAdd?: () => {};
  onSearch?: (key: string) => void;
}

export const HeaderFilter = (props: Props) => {
  const { onTogle, filter, onAdd, onSearch } = props;
  const setKey = (key: string) => {
    if (onSearch) onSearch(key);
  };
  return (
    <div className="d-flex header-filter">
      <Button style={{ backgroundColor: "transparent" }} onClick={onTogle}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Button>

      <SearchItem setKey={setKey} />
      <SelectItem data={filter?.data} />
      {onAdd ? (
        <Button variant="contained" color="primary" onClick={onAdd}>
          <div className="btn-add">
            <AddIcon />
          </div>
        </Button>
      ) : null}
    </div>
  );
};
