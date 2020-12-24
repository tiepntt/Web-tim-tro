import { Checkbox, CheckboxProps, withStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import React from "react";

interface Props {
  value?: boolean;
  label?: string;
  greenColor?: boolean;
}
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
    height: "22px",
    width: "22px",
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
export const CheckBoxGreen = (props: Props) => {
  const { value } = props;
  return (
    <>
      <GreenCheckbox checked={value || false} name="checkedG" />
    </>
  );
};
