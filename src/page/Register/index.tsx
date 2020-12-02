import { Button, Fab, makeStyles, Paper, useTheme } from "@material-ui/core";
import {
  ArrowBackTwoTone,
  ArrowForward,
  KeyboardArrowLeft,
} from "@material-ui/icons";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";

import MobileStepper from "@material-ui/core/MobileStepper";

import Typography from "@material-ui/core/Typography";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import "./style.scss";
import { SelectRole } from "../../components/Register/selectRole";
import NavigationIcon from "@material-ui/icons/Navigation";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { InfoInput } from "../../components/Register/Info";
interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    width: 100,
  },
}));

export const Register = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const tutorialSteps = [<SelectRole onSelect={handleNext} />, <InfoInput />];
  const maxSteps = tutorialSteps.length;
  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };

  return (
    <div className={"Register"}>
      <HeaderItem />
      <Container className="content">
        <div className={classes.root}>
          <SwipeableViews
            draggable={false}
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            className="views"
          >
            {tutorialSteps.map((step, index) => (
              <div key={index}>{step}</div>
            ))}
          </SwipeableViews>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
