import * as React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getToken } from "../../api";
import { AuthApi } from "../../api/auth/auth.api";
import { RootState } from "../../store";
type Props = {};
export const Login = (props: Props) => {
  const auth = useSelector((state: RootState) => state.auth);
  const history = useHistory();
  console.log(auth);

  const dispatch = useDispatch();
  const setUserName = (e: any) => {
    let username = e.target.value;
    dispatch({
      type: "UPDATE",
      payload: {
        ...(auth as any),
        username: username,
      },
    });
  };

  const setPassWord = (e: any) => {
    let password = e.target.value;
    dispatch({
      type: "UPDATE",
      payload: {
        ...(auth as any),
        password: password,
      },
    });
  };
  const login = async () => {
    AuthApi.login({ account: { ...auth } }).then((result) => {
      let data = result.data;
      if (data.status === 200) {
        localStorage.setItem("token", data.token);
        if (history.length >= 0) {
          history.goBack();
        } else history.push("/");
      } else {
        let token = getToken();
        localStorage.removeItem("token");
      }
    });
  };
  return (
    <Container>
      <h1 className="text-center">Login</h1>

      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                defaultValue={""}
                onChange={(e: any) => setUserName(e)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                defaultValue={""}
                onChange={(e: any) => setPassWord(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={() => login()}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
