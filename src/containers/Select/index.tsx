import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

interface Props {
  data?: { event?: any; key?: any; value?: any }[];
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
  const { data } = props;

  const classes = useStyles();
  const [age, setAge] = React.useState("");
  useEffect(() => {
    if (data) {
      setAge(data[0].value);
    }
  }, []);

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return data ? (
    <FormControl required className={classes.formControl}>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={age}
        onChange={handleChange}
        className={classes.selectEmpty}
      >
        {data.map((item) => {
          return <MenuItem value={item.value}>{item.key}</MenuItem>;
        })}
      </Select>
    </FormControl>
  ) : (
    <></>
  );
};
