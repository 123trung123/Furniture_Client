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
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const [success, setSuccess] = useState(""); // New state for success message

  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(""); // Reset success message

    try {
      const response = await axios.get("https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi");
      const users = response.data; // Get all users from the API

      // Find user with matching email and password
      const user = users.find((user) => user.email === email && user.password === password);
      
      if (user) {
        console.log("Login successful:", user);
        setSuccess("Đăng nhập thành công!"); // Set success message
        // You can store user data in local storage or global state here
      } else {
        setError("Invalid email or password");
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
                  <h2 className="text-center">Login</h2>
                  {success && <p className="text-success">{success}</p>} {/* Display success message */}
                  {error && <p className="text-danger">{error}</p>} {/* Display error message */}
                  <FormGroup className="mt-4 mb-4">
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Update email state
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

                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Check me out</Label>
                  </FormGroup>
                  <Button className="btn btn-success button-form my-3" disabled={loading}>
                    {loading ? "Đang đăng nhập..." : "Đăng nhập"} {/* Change button text based on loading state */}
                  </Button>
                  <hr />
                </Form>
                <div>
                  <Link to="/register">Create new account</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="#">Forgot password</a>
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
