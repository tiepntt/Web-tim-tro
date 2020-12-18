import { InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormControl } from "react-bootstrap";

interface Props {
  input?: { name?: string; title?: string }[];
  onSelect?: (index: number) => void;
  label?: string;
  disable?: boolean;
  value?: number;
}

const useStyles = makeStyles((theme) => ({
  select: {
    margin: theme.spacing(1),
  },
  selectLabel: {
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "8px",
  },
}));

export const InputSelect = (props: Props) => {
  const { input, onSelect } = props;
  const [value, setValue] = useState(0);
  const onChange = (e: any) => {
    setValue(e.target.value);
    if (onSelect) onSelect(e.target.value);
  };
  useEffect(() => {
    if (!props.value) setValue(0);
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.select}>
      <InputLabel
        id="demo-simple-select-helper-label"
        className={classes.selectLabel}
      >
        {props.label || "label"}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={onChange}
        fullWidth
        disabled={props.disable}
      >
        {input
          ? input.map((item, index) => (
              <MenuItem value={index}>{item.name || item.title}</MenuItem>
            ))
          : null}
      </Select>
    </div>
  );
};
