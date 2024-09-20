import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./Login.css";
import Aos from "aos";
export default function Login() {
  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-login">
      <Container fluid>
        <Row style={{ overflow: "hidden" }}>
          <Col
            className="left-box text-center"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="linear"
            xs="6"
          >
            <div>
              <h1 className="title-welcome">Chào mừng đến với</h1>
            </div>
            <div className="logo-web"></div>
          </Col>
          <Col
            className="login-box"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            xs="6"
          >
            <div className="overlay"></div>

            <div className="content">
              <div className="form-box">
                <Form>
                  <h2 className="text-center">Login</h2>
                  <FormGroup className="mt-4 mb-4">
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </FormGroup>

                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Check me out</Label>
                  </FormGroup>
                  <Button className="btn btn-success button-form my-3">
                    Đăng nhập
                  </Button>
                  <hr />
                </Form>
                <div>
                  <a>Create new account</a>&nbsp;&nbsp;&nbsp;&nbsp;
                  <a>Forgot password</a>
                </div>
                <div>
                  <Button className="btn btn-danger button-form button-GG mt-2">
                    Đăng nhập với Google
                  </Button>
                  <Button className="btn btn-success button-form button-FB mt-2">
                    Đăng nhập với Facebook
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
