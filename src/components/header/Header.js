import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Dropdown 
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  return (
    <div className="header">
      <Container>
        <Navbar className="navbar-expand-md" light>
          {/* Logo */}
          <Link to="/">
            <img className="logo" src={logo} alt="Furniture Corner" />
          </Link>

          <NavbarToggler onClick={toggle} />

          {/* Navigation Links */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="navbar-nav m-auto align-items-center" navbar>
              <NavItem>
                <Link to="/" className="header-item">
                  Home
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link to="/new-arrivals" className="header-item">
                  New Arrivals
                </Link>
              </NavItem> */}
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

              {/* Dropdown for Categories */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="header-item">
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Living Room</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>

              </UncontrolledDropdown>
            </Nav>

            {/* Icons and Cart */}
            <div className="header-icons">
            <Dropdown isOpen={searchOpen} toggle={toggleSearch}  inNavbar>
                <DropdownToggle className="btn_general better_button header-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <div className="px-1">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="form-control"
                    />
                  </div>
                </DropdownMenu>
              </Dropdown>
              <Link to="/user" className="header-icon">
                <i className="fa-solid fa-gear"></i>
              </Link>
              <Link to="/login" className="header-icon">
                <i className="fa-solid fa-user"></i>
              </Link>
              <Link to="/cart" className="header-icon">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>

            <NavbarText className="total-text">Total: $0.00</NavbarText>
          </Collapse>
        </Navbar>
      </Container>

      {/* Scroll to Top Button */}
      <button className="totop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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
