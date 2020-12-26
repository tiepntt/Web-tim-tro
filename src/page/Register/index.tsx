import { useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import HeaderItem from "../../components/Navbar";
import "./style.scss";
import { SelectRole } from "../../components/Register/selectRole";
import { InfoInput } from "../../components/Register/Info";
import { Contact } from "../../components/Register/Contact";
import { UserInputDto } from "../../api/user/user/dto";
import { AuthApi } from "../../api/admin/authenticate";
import { handleToast } from "../../service/Toast";
import { ContactDto } from "../../api/user/contactUser/dto";
import SwipeableViews from "react-swipeable-views";
import { ContactApi } from "../../api/user/contactUser";
import { useHistory } from "react-router";
interface Props {}

export const Register = (props: Props) => {
  const history = useHistory();
  const [user, setUser] = useState({} as UserInputDto);
  const [contactUser, setContact] = useState({} as ContactDto);
  useEffect(() => {
    setUser({});
    setContact({});
  }, []);
  const setUserInfo = (state: UserInputDto) => {
    setUser({ ...user, ...state });
  };
  const setUserContact = (state: ContactDto) => {
    setContact({ ...contactUser, ...state });
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const onSelectRole = (roleCode: string) => {
    setUser({ ...user, roleCode: roleCode });
  };

  // register
  const register = () => {
    AuthApi.resigter(user).then((response) => {
      handleToast(response.data);
      if (response.data.status === 200) {
        setContact({
          ...contactUser,
          userId: response.data.result.id,
          email: user.email,
        });
        handleNext();
      }
    });
  };
  const createContact = () => {
    ContactApi.create(contactUser).then((response) => {
      handleToast(response.data);
      if (response.data.status === 200) {
        history.push("/login");
      }
    });
  };
  const tutorialSteps = [
    <SelectRole onSelect={handleNext} setRole={onSelectRole} />,
    <InfoInput onNext={register} stateChange={setUserInfo} />,
    <Contact setContactUser={setUserContact} onNext={createContact} />,
  ];
  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };
  return (
    <div className={"Register"}>
      <Container className="content">
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
      </Container>
    </div>
  );
};
