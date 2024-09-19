import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Button, Input, FormGroup, Label, Form } from 'reactstrap';
import "./contact.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-container">
      <Container className="py-5">
        <h4 className="text-center mb-4" data-aos="fade-up">
          <p className="Title">
            Liên Hệ <span className="innerTitle">Chúng Tôi</span>
          </p>
        </h4>
        <Row>
          {/* Form Section */}
          <Col xs={12} md={6} data-aos="fade-right">
            <div
              className="p-4"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h6 className="mb-2">Hãy cho chúng tôi ý kiến của bạn</h6>
              <p className="mb-4">
                Hãy điền thông tin vào form bên dưới và chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
              </p>
              <Form>
                <FormGroup>
                  <Label for="name">Tên</Label>
                  <Input type="text" name="name" id="name" required placeholder="Nhập tên của bạn" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" required placeholder="Nhập email của bạn" />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Tin nhắn</Label>
                  <Input type="textarea" name="message" id="message" rows="4" required placeholder="Nhập tin nhắn của bạn" />
                </FormGroup>
                <Button type="submit"  className="mt-3" style={{ color: "black",background:"#ffe4c4" }}>
                  Gửi Tin Nhắn
                </Button>
              </Form>
            </div>
          </Col>

          <Col xs={12} md={6} data-aos="fade-left">
            <h6>Số liên hệ</h6>
            <p><strong>Email:</strong> test@company.com</p>
            <p><strong>Điện Thoại:</strong> +123 456 7890</p>
            <p><strong>Địa Chỉ:</strong> 123 Street, City, Country</p>
            <p className="contact-note">
              Chúng tôi sẵn sàng trả lời các câu hỏi của bạn. Hãy liên hệ chúng tôi và chúng tôi sẽ trả lời sớm nhất có thể.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
