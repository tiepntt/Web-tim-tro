import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";
import { TextFieldInput } from "../../Input/textField";
import { FormControl } from "react-bootstrap";
import { SearchIcon } from "@material-ui/data-grid";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./style.scss";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { InputSelect } from "../../Input/select";
import { DropDownInput } from "../../Input/dropdown";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56,
  },
  filterButton: {
    overflowY: "hidden",
    minWidth: 90,
    lineHeight: "16px",
    height: 42,
    padding: "6px 0",
    marginTop: 25,
    borderRadius: 5,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  addButton: {
    minWidth: 85,
    height: 45,
    padding: "10px 0",
    marginTop: 25,
    borderRadius: 5,
    marginLeft: 5,
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  differenceIcon: {
    color: colors.green[900],
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1),
  },
  input: {
    height: "50px",
    padding: " 13.5px 0px",
  },
}));

interface Props {
  className: string;
  count?: number;
  add?: boolean;
  onAdd?: () => void;
  onSearch?: (e: string) => void;
  onSelect?: (e: any) => void;
  filter?: boolean;
  filterData?: [];
  filterValue?: number;
}
export const SideBarCard = (props: Props) => {
  const {
    filter,
    onSearch,
    onSelect,
    filterData,
    add,
    onAdd,
    count,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={5}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h5">
              Tổng số{" "}
            </Typography>
            <Typography color="textPrimary" variant="h4" className="d-flex">
              {count}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box display="flex" alignItems="center">
          <TextField
            fullWidth={!add || !filter}
            className={classes.input}
            onChange={(e) => onSearch && onSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search product"
            variant="outlined"
          />
          {add && (
            <div className={classes.addButton} onClick={onAdd}>
              Thêm{" "}
            </div>
          )}
          {filter && (
            <div className={classes.filterButton}>
              <DropDownInput
                label="Lọc theo"
                input={filterData}
                onSelect={onSelect}
                value={props.filterValue}
              />
            </div>
          )}
        </Box>
        <Box display="flex" alignItems="center"></Box>
      </CardContent>
    </Card>
  );
};
