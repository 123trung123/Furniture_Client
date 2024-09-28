import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./header.css";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import MenuIcon from "@mui/icons-material/Menu"; // Menu icon for hamburger menu
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import InfoIcon from "@mui/icons-material/Info";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user); // Get userInfo from Redux state
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="header">
      <Container>
        <Navbar className="navbar-expand-md" light>
          {/* Logo */}
          <Link to="/">
            <img className="logo" src={logo} alt="Furniture Corner" />
          </Link>

          {/* Main Navigation Links */}
          <Collapse isOpen={true} navbar>
            <Nav className="navbar-nav m-auto align-items-center" navbar>
              <NavItem>
                <Link to="/" className="header-item">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/products" className="header-item">
                  Products
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="header-item">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/blog" className="header-item">
                  Blogs
                </Link>
              </NavItem>
            </Nav>
          </Collapse>

          {/* Icons and Hamburger Menu */}
          <div className="header-right">
            {/* Icons */}
            <div className="header-icons">
              <Link to="/cart" className="header-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
              <Link to="/login" className="header-icon">
                <i className="fa-solid fa-user"></i>
              </Link>
            </div>

            {/* Hamburger Menu Icon */}
            <IconButton className="hamburger-menu" onClick={toggleSidebar}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </Navbar>
      </Container>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <ul className="sidebar-menu">
            <li>
              <Link to="/" className="sidebar-item" onClick={toggleSidebar}>
                <HomeIcon />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className="sidebar-item" onClick={toggleSidebar}>
                <LocalMallIcon />
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="/blog" className="sidebar-item" onClick={toggleSidebar}>
                <InfoIcon />
                <span>Blogs</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="sidebar-item" onClick={toggleSidebar}>
                <ContactMailIcon />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="sidebar-item" onClick={toggleSidebar}>
                <ShoppingCartIcon />
                <span>Cart</span>
              </Link>
            </li>
            <li>
              {userInfo ? (
                <div className="sidebar-item" onClick={() => {
                  handleLogout();
                  toggleSidebar();
                }}>
                  <i className="fa-solid fa-sign-out"></i>
                  <span>Logout</span>
                </div>
              ) : (
                <Link to="/login" className="sidebar-item" onClick={toggleSidebar}>
                  <i className="fa-solid fa-user"></i>
                  <span>Login</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      {/* Scroll to Top Button */}
      <button
        className="totop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>

      {/* Call Button */}
      <section className="call-button">
        <p className="cc-calto-action-ripple">
          <i className="fa-solid fa-phone"></i>
          <span className="num">000_0000_000</span>
        </p>
      </section>
    </div>
  );
}
