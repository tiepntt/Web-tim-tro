import {
  Checkbox,
  CheckboxProps,
  createStyles,
  FormControlLabel,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";

interface Props {
  onChange?: (e: boolean) => void;
  value?: boolean;
  label?: string;
  greenColor?: boolean;
}
const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export const CheckBoxInput = (props: Props) => {
  const { value, onChange, label, greenColor } = props;
  const classes = useStyles();
  const handleChange = (event: any) => {
    if (onChange) onChange(event.target.checked as boolean);
  };
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={value || false}
            onChange={handleChange}
            name="gilad"
            className={classes.root}
          />
        }
        label={label}
      />
    </>
  );
};
