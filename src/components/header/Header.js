import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../resources/logo.png";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Container>
        <Navbar className="navbar-expand-md" light>
          <Link to="/">
            <img className="logo" src={logo} alt="Furniture Corner" />
          </Link>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/all-items">All Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Living Room</DropdownItem>
                  <DropdownItem>Bedroom</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

            <div className="header-icons">
              <Link to="/wishlist" className="header-icon">
                <i className="fa-solid fa-heart"></i>
              </Link>
              <Link to="/cart" className="header-icon">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Giỏ Hàng</span>
              </Link>
            </div>
            <NavbarText className="total-text">Total: $0.00</NavbarText>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
