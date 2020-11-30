import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputBase, makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl/FormControl";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Paper from "@material-ui/core/Paper/Paper";
import Select from "@material-ui/core/Select/Select";
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
            <Select label="Age" className={"drop-down"} value={20}>
              <MenuItem value={10}>None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Col>
          <Col lg={2} xs={6}>
            <Select label="Age" className={"drop-down"} value={20}>
              <MenuItem value={10}>None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Col>
          <Col lg={2} xs={6}>
            <Select label="Age" className={"drop-down"} value={20}>
              <MenuItem value={10}>None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Col>
          <Col lg={2} xs={6}>
            <Select label="Age" className={"drop-down"} value={20}>
              <MenuItem value={10}>None</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
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
