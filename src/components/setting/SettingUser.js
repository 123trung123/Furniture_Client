import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Card,
  CardBody,
} from "reactstrap";
import Aos from "aos";
import "aos/dist/aos.css";
// import "./SettingsPage.css";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone_number: "",
    address: "",
    date_of_birth: "",
    profilePicture: null,
  });

  useEffect(() => {
    Aos.init();
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
  };

  return (
    <div className="bg-settings-page">
      <Container>
        <Row>
          <Col xs="12" md="6" className="mx-auto">
            <Card className="settings-card" data-aos="fade-up">
              <CardBody>
                <h2 className="text-center">User Settings</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="fullname">Full Name</Label>
                    <Input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="phone_number">Phone Number</Label>
                    <Input
                      type="text"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="date_of_birth">Date of Birth</Label>
                    <Input
                      type="date"
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="profilePicture">Profile Picture</Label>
                    <Input
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {formData.profilePicture && (
                      <img
                        src={URL.createObjectURL(formData.profilePicture)}
                        alt="Profile Preview"
                        className="img-thumbnail mt-2"
                        width="150"
                      />
                    )}
                  </FormGroup>
                  <Button type="submit" color="primary" className="mt-3">
                    Save Changes
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
