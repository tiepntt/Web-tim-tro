import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { AccountCircle, Label } from "@material-ui/icons";
import React from "react";
import "./style.scss";
interface Props {
  onChange?: (e: any) => void;
  disable?: boolean;
  label: string;
  placeholder?: string;
  value?: any;
  type?: string;
  start?: any;
  required?: boolean;
  end?: any;
  labelNotBold?: boolean;
}
const useStyles = makeStyles((theme: any) => ({
  textField: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    fontSize: "20px",
  },
}));

export const TextFieldInput = (props: Props) => {
  const {
    onChange,
    disable,
    label,
    placeholder,
    value,
    type,
    start,
    end,
    labelNotBold,
    required,
  } = props;
  const classes = useStyles();
  const onInputChange = (e: any) => {
    if (onChange) onChange(e.target.value);
  };
  return (
    <div
      className={`text-field-input + ${labelNotBold ? " label-not-bold" : ""}`}
    >
      <TextField
        required={required}
        className={classes.textField}
        id="text-field-input"
        label={label}
        type={type || "text"}
        style={{ margin: 8 }}
        placeholder={placeholder}
        fullWidth
        onChange={onInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">{start}</InputAdornment>
          ),
          endAdornment: <InputAdornment position="end">{end}</InputAdornment>,
        }}
        value={value || ""}
        margin="normal"
        disabled={disable || false}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
    </div>
  );
};
