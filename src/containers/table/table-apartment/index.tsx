import React, { useEffect } from "react";
import { ApartmentGetDto } from "../../../api/apartment/apartment/dto";
import { RoleAdmin } from "../../../libs/constants/role";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

interface Props {
  apartments?: ApartmentGetDto[];
  type: string;
}
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props: { row: ApartmentGetDto }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{row.isApprove}</TableCell>
        <TableCell align="right">{row.isApprove}</TableCell>
        <TableCell align="right">{row.isApprove}</TableCell>
        <TableCell align="right">{row.isApprove}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const ApartmentList = (props: Props) => {
  const { apartments, type } = props;

  const getTitle = () => {
    switch (type) {
      case RoleAdmin.MANAGER:
        return ["", "Tiêu đề", "Địa chỉ", "Giá", "Tình trạng", "Tác giả"];
      case RoleAdmin.ADMIN:
        return ["", "Tiêu đề", "Địa chỉ", "Giá", "Tình trạng", "Tác giả"];
      case RoleAdmin.OWNER:
        return ["#", "Tiêu đề", "Địa chỉ", "Giá", "Tình trạng"];
      case RoleAdmin.RENTER:
        return ["#", "Tie", "Email", "CMND", "Quản lý"];
      default:
        return [];
    }
  };
  useEffect(() => {}, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {getTitle().map((item) => (
              <TableCell>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {apartments
            ? apartments?.map((row) => <Row key={row.id} row={row} />)
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
