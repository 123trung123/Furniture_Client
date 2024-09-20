import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "#111", color: "", padding: "0 0" }}
    >
      <Container>
        <Row>
          {/* Logo and company description */}
          <Col xs={12} sm={6} md={4}>
            <div>
              <img
                src={logo}
                alt="Logo"
                className="footer-logo"
                style={{ width: "150px" }}
              />
              <p style={{ marginTop: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>

          {/* Useful Links */}
          <Col xs={12} sm={6} md={4}>
            <h6>Liên Kết Hữu Ích</h6>
            <p>
              <i
                class="fa-solid fa-house"
                style={{ marginRight: "0.5rem" }}
              ></i>
              <Link to="/" className="footer-link">
                Trang Chủ
              </Link>
            </p>
            <p>
              <i
                class="fa-solid fa-bag-shopping"
                style={{ marginRight: "0.5rem" }}
              ></i>
              <Link to="/products" className="footer-link">
                Sản Phẩm
              </Link>
            </p>
            <p>
              <i
                class="fa-solid fa-cart-shopping"
                style={{ marginRight: "0.5rem" }}
              ></i>

              <Link to="/cart" className="footer-link">
                Giỏ Hàng
              </Link>
            </p>
            <p>
              <i
                class="fa-solid fa-envelope"
                style={{ marginRight: "0.5rem" }}
              ></i>

              <Link to="/contact" className="footer-link">
                Liên Hệ
              </Link>
            </p>
          </Col>

          {/* About Us */}
          <Col xs={12} sm={6} md={4}>
            <h6>About Us</h6>
            <p>
              <i
                class="fa-solid fa-circle-info"
                style={{ marginRight: "0.5rem" }}
              ></i>
              <Link to="/aboutus" className="footer-link">
                Thông Tin Thêm
              </Link>
            </p>
            <p>
              <i
                class="fa-solid fa-circle-info"
                style={{ marginRight: "0.5rem" }}
              ></i>

              <Link to="/reviews" className="footer-link">
                Đánh Gía
              </Link>
            </p>
            <p>
              <i
                class="fa-solid fa-circle-info"
                style={{ marginRight: "0.5rem" }}
              ></i>
              <Link to="/aboutus" className="footer-link">
                Terms of Service
              </Link>
            </p>
          </Col>
        </Row>

        {/* Divider */}
        <hr style={{ borderColor: "#555", margin: "2rem 0" }} />

        {/* Contact and Social Media */}
        <Row className="justify-content-between">
          <Col>
            <p>Địa Chỉ: Lorem ipsum dolor sit amet</p>
            <p>Thứ Hai - Thứ Sáu: 9am - 5pm</p>
            <p style={{ textDecoration: "underline" }}>
              <Link to="/contact" className="footer-link">
                Gửi Tin Nhắn
              </Link>
            </p>
          </Col>
          <Col className="text-right">
            <a
              href="#"
              className="footer-icon"
              style={{ color: "inherit", marginRight: "1rem" }}
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              className="footer-icon"
              style={{ color: "inherit", marginRight: "1rem" }}
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="footer-icon" style={{ color: "inherit" }}>
              <i class="fa-brands fa-youtube"></i>
            </a>
          </Col>
        </Row>

        {/* Footer bottom text */}
        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            paddingBottom: "1rem",
            color: "#bbb",
          }}
        >
          <p>© 2024 . All rights reserved. - Furniture Corner</p>
        </div>
      </Container>
    </div>
  );
}
