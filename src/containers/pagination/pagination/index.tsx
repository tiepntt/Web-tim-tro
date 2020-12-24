import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import React from "react";

interface Props {
  page: number;
  count: number;
  onChange?: (e: number) => void;
}

export const PaginationAuto = (props: Props) => {
  const { page, onChange, count } = props;
  const onChangePage = (e: any) => {
    if (onChange) onChange(e.target.value);
  };
  return (
    <Pagination
      page={page}
      count={count}
      onChange={onChangePage}
      renderItem={(item: any) => (
        <PaginationItem
          to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
};
