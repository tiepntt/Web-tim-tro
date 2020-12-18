import {
  Checkbox,
  createStyles,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import React from "react";

interface Props {}
const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));
export const CheckBoxInput = (props: Props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
        }
        label="Thang máy"
      />
    </div>
  );
};
