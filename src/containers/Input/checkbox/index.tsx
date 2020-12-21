import {
  Checkbox,
  createStyles,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import React from "react";

interface Props {
  onChange?: (e: boolean) => void;
  value?: boolean;
  label?: string;
}
const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));
export const CheckBoxInput = (props: Props) => {
  const { value, onChange, label } = props;
  const classes = useStyles();
  const handleChange = (event: any) => {
    if (onChange) onChange(event.target.checked as boolean);
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox checked={value} onChange={handleChange} name="gilad" />
        }
        label={label}
      />
    </div>
  );
};
