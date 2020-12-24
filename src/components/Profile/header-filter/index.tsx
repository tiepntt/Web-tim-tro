import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddIcon } from "@material-ui/data-grid";

import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
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
  onAdd?: () => void;
  onSearch?: (key: string) => void;
  onSelect?: (index: number) => void;
}

export const HeaderFilter = (props: Props) => {
  const { onTogle, filter, onAdd, onSearch, onSelect } = props;
  const setKey = (key: string) => {
    if (onSearch) onSearch(key);
  };
  useEffect(() => {}, [onAdd]);
  return (
    <div className="d-flex header-filter">
      <Button style={{ backgroundColor: "transparent" }} onClick={onTogle}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Button>

      <SearchItem setKey={setKey} />
      {filter ? <SelectItem data={filter?.data} onSelect={onSelect} /> : null}
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
