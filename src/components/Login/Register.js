import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
// import "./Register.css";
import Aos from "aos";
import axios from "axios"; 
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for navigation

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); // Initialize navigate for navigation

  useEffect(() => {
    Aos.init();
    window.scrollTo(0, 0);
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://66a07b747053166bcabb8c62.mockapi.io/PracticeApi", {
        fullname,
        email,
        password,
        // You can add default values for other fields as needed
      });
      console.log("Registration successful:", response.data);
      navigate("/login"); // Redirect to login page after registration
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-register">
      <Container fluid>
        <Row>
          <Col xs="12" md="6" className="mx-auto">
            <div className="form-box">
              <Form onSubmit={handleSubmit}>
                <h2 className="text-center">Register</h2>
                {error && <p className="text-danger">{error}</p>} {/* Display error message */}
                <FormGroup>
                  <Input
                    id="fullname"
                    name="fullname"
                    placeholder="Full Name"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
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
                <Button className="btn btn-success button-form my-3" disabled={loading}>
                  {loading ? "Đang đăng ký..." : "Đăng ký"} {/* Change button text based on loading state */}
                </Button>
              </Form>
              <div>
                <Link to="/login">Already have an account? Login</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
