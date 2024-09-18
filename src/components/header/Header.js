import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
import "./header.css";
import logo from "../../resources/logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
      <Container>
        <Navbar className=" navbar-expand-md">
          <img className="logo" src={logo} />
          {/* <NavbarBrand className="Brand_nostyle"  href="/">Furniture Corner</NavbarBrand> */}

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/components/">All item</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Product
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Total</NavbarText>
            <i class="fa-solid fa-heart"></i>
            <div><Link to="/cart">ssss</Link></div>
            <NavLink href="/cart" style={{ textDecoration: "none", color: "black" }}>
              <div
                className="menu-item d-flex align-items-center"
                // data-aos="fade-left"
                // data-aos-duration="900"
                // data-aos-delay="600"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <div style={{ width: 20 }}></div>Giỏ Hàng
              </div>
            </NavLink>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
