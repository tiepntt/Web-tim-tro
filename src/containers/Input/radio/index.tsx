import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  makeStyles,
} from "@material-ui/core";

interface Props {
  input?: {
    key?: string;
    value?: any;
    name?: string;
  }[];
  inline?: boolean;
}
const useStyles = makeStyles((theme: any) => ({
  RaditoFlex: {
    display: "inline-block",
  },
}));
export const RadioInput = (props: Props) => {
  const { input, inline } = props;
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState("female");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        className={inline ? classes.RaditoFlex : ""}
        value={selectedValue}
        onChange={handleChange}
      >
        <FormControlLabel value="Có" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};
