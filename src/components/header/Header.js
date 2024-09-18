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
import "./header.css"
import logo from "../../resources/logo.png"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header">
        <Container >
      <Navbar className=" navbar-expand-md">
        <img className="logo" src={logo}/>
        {/* <NavbarBrand className="Brand_nostyle"  href="/">Furniture Corner</NavbarBrand> */}
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto"  navbar>
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
        
          <i class="fa-solid fa-cart-shopping"></i>
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}
