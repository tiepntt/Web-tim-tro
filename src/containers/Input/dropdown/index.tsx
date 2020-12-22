import { MenuItem } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import React, { useState } from "react";

interface Props {
  value?: number;
  input?: { id?: number; code?: string; name?: string }[];
  onSelect?: (e?: number) => void;
  onClear?: (e: number) => void;
  label?: string;
  labelId?: string;
  inputBootstrap?: any;
  id?: any;
}

export const DropDownInput = (props: Props) => {
  const [selected, setSelected] = useState(false);
  const { value, input, onSelect, label, inputBootstrap, id, labelId } = props;
  const onSelectItem = (e: any) => {
    if (onSelect) {
      if (e.target.value !== -1) onSelect(e.target.value);
      else onSelect(undefined);
    }
  };
  const getLabel = () => {
    if (!value || !selected)
      return (
        <MenuItem disabled value={0}>
          {label}
        </MenuItem>
      );
  };
  return (
    <Select
      onMouseMove={() => setSelected(true)}
      onClick={onSelectItem}
      className={"drop-down"}
      value={value || 0}
      input={inputBootstrap}
      id={id}
      labelId={labelId}
    >
      {getLabel()}
      <MenuItem value={-1}>{"Tất cả"}</MenuItem>
      {input?.map((item, index) => (
        <MenuItem value={item.id || item.code || index}>{item.name}</MenuItem>
      ))}
    </Select>
  );
};
