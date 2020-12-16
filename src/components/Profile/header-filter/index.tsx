import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddIcon } from "@material-ui/data-grid";
import { EventEmitter } from "events";
import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { SearchItem } from "../../../containers/Search";
import { SelectItem } from "../../../containers/Select";
import "./style.scss";
export interface Filter {
  title: string;
  data: FilterData[];
}
export interface FilterData {
  key: string;
  title: string;
  value: string;
}
interface Props {
  onTogle?: () => void;
  filter?: any;
  onAdd?: () => {};
  onSearch?: (key: string) => void;
  onSelect?: (index: number) => void;
  emiter?: EventEmitter;
}

export const HeaderFilter = (props: Props) => {
  const { onTogle, filter, onAdd, onSearch, onSelect } = props;
  const setKey = (key: string) => {
    if (onSearch) onSearch(key);
  };

  return (
    <div className="d-flex header-filter">
      <Button style={{ backgroundColor: "transparent" }} onClick={onTogle}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Button>

      <SearchItem setKey={setKey} />
      <SelectItem data={filter?.data} onSelect={onSelect} />
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
