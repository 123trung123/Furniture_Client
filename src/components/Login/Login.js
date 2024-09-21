import React, { useEffect, useState } from "react";
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
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For registration
  const [isRegister, setIsRegister] = useState(false); // To toggle between login and register
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (isRegister && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi");
      const users = response.data;

      if (isRegister) {
        const userExists = users.find((user) => user.email === email);
        if (userExists) {
          setError("User already exists.");
        } else {
          // Register the new user by POSTing to the API
          await axios.post("https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi", {
            email: email,
            password: password,
          });
          setSuccess("Registration successful! Please login.");
          setIsRegister(false);
        }
      } else {
        // Check if the user exists for login
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
          setSuccess("Login successful!");
        } else {
          setError("Invalid email or password.");
        }
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
                <Form onSubmit={handleSubmit}>
                  <h2 className="text-center">{isRegister ? "Register" : "Login"}</h2>
                  {success && <p className="text-success">{success}</p>}
                  {error && <p className="text-danger">{error}</p>}

                  <FormGroup className="mt-4 mb-4">
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>

                  {isRegister && (
                    <FormGroup>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </FormGroup>
                  )}

                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Remember me</Label>
                  </FormGroup>
                  <Button className="btn btn-success button-form my-3" disabled={loading}>
                    {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
                  </Button>
                  <hr />
                </Form>

                <div>
                  <Button color="link" onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
                  </Button>
                </div>
                <div>
                  <Button className="btn btn-danger button-form button-GG mt-2">
                    {isRegister ? "Sign up with Google" : "Login with Google"}
                  </Button>
                  <Button className="btn btn-success button-form button-FB mt-2">
                    {isRegister ? "Sign up with Facebook" : "Login with Facebook"}
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
