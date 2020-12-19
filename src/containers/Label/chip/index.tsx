import { Chip, makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
  onDelete?: (value?: any) => void;
  label?: string;
  color?: "default" | "primary" | "secondary";
}
const useStyles = makeStyles((theme: any) => ({
  chipLabel: {
    margin: theme.spacing(0.5),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    height: theme.spacing(4),
    color: "#214234",
    fontSize: 12,
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export const ChipLabel = (props: Props) => {
  const { onDelete, label, color } = props;
  const classes = useStyles();
  return (
    <>
      <Chip
        className={classes.chipLabel}
        label={label}
        onDelete={onDelete}
        color={color || "default"}
        variant="outlined"
      />
    </>
  );
};
