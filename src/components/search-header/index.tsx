import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.scss";
interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 2px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchHeader = (props: Props) => {
  const classes = useStyles();
  return (
    <div className="searh-header">
      <Container>
        <Row>
          <Col lg={4} xs={12}>
            <Paper component="form" className={classes.root}>
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <FontAwesomeIcon icon={faSearch} size="sm" />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          </Col>
          <Col lg={2} xs={6}>
            <Select label="Distric" className={"drop-down"} value={1}>
              <MenuItem value={1}>Khu vực</MenuItem>
              <MenuItem value={2}>Cầu Giấy</MenuItem>
              <MenuItem value={3}>Đống Đa</MenuItem>
              <MenuItem value={4}>Hà Đông</MenuItem>
            </Select>
          </Col>
          <Col lg={2} xs={6}>
            <Select label="price" className={"drop-down"} value={10}>
              <MenuItem value={10} disabled={true}>
                Giá thuê
              </MenuItem>
              <MenuItem value={1}>1-2tr</MenuItem>
              <MenuItem value={20}>2-4tr</MenuItem>
              <MenuItem value={30}>{">4tr"}</MenuItem>
            </Select>
          </Col>
          <Col lg={2} xs={6}>
            <Select label="Age" className={"drop-down"} value={10}>
              <MenuItem value={10}>Diện tích</MenuItem>
              <MenuItem value={1}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Col>
          <Col lg={2} xs={6}>
            <Select label="Age" className={"drop-down"} value={10}>
              <MenuItem value={10} disabled={true}>
                Loại hình
              </MenuItem>
              <MenuItem value={1}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchHeader;
