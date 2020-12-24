import React from "react";
import { SideBarCard } from "../../../../../../containers/Card/cardSideBar";
import "./style.scss";
interface Props {
  count?: number;
  add?: boolean;
  onAdd?: () => void;
  onSearch?: (e: string) => void;
  filter?: boolean;
  filterData?: [];
  filterValue?: number;
  onSelect?: (e: number) => void;
}

export const SideBarUser = (props: Props) => {
  const { add, onAdd, onSearch, filter } = props;

  return (
    <div>
      <SideBarCard
        add={add}
        onAdd={onAdd}
        count={props.count}
        className="side-bar-user"
        onSearch={onSearch}
        filter={filter}
        filterData={props.filterData}
        filterValue={props.filterValue}
        onSelect={props.onSelect}
      />
    </div>
  );
};
