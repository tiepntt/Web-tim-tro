import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { EventEmitter } from "events";

interface Props {
  data?: { title?: any; key?: any; value?: any }[];
  emiter?: EventEmitter;
  onSelect?: (index: number) => void;
}

const useStyles = makeStyles((theme: any) => ({
  formControl: {
    minWidth: 120,
    display: "flex",
  },
  margin: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    color: "white",
    textAlign: "center",
    height: "56px",
  },
}));
export const SelectItem = (props: Props) => {
  const { data, onSelect } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    if (data) {
      setValue(0);
    }
  }, []);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    if (onSelect) onSelect(event.target.value);
  };

  return data ? (
    <FormControl required className={classes.formControl}>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value}
        onChange={handleChange}
        className={classes.selectEmpty}
      >
        {data.map((item, index) => {
          return <MenuItem value={index}>{item.title}</MenuItem>;
        })}
      </Select>
    </FormControl>
  ) : (
    <></>
  );
};
