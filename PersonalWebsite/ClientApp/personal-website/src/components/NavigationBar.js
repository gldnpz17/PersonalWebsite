import React from "react";
import { Button, Collapse, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #0277bd;
  border-color: #004c8c;

  &:hover {
    background-color: #004c8c;
    border-color: #004c8c;
  }

  &:active {
    background-color: #004c8c !important;
    border-color: #58a5f0 !important;
    border-width: 2px !important;
  }

  &:focus {
    background-color: #004c8c !important;
    border-color: #58a5f0 !important;
    box-shadow: 0px 0px 0px;
  }
  
  &:active:focus {
    background-color: #004c8c !important;
    border-color: #58a5f0 !important;
    box-shadow: 0px 0px 0px;
  }
`;

const StyledNavBar = styled(Navbar)`
  background-color: #1c313a;
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');

  color: #58a5f0 !important;
  font-family: 'Inconsolata', monospace; 
`;

const StyledNavLink = styled(Nav.Link)`
  color: #718792 !important;

  &:hover {
    color: whitesmoke !important;
  }
`;

export default class NavigationBar extends React.Component{
  render() {
    return (
      <StyledNavBar className="fixed-top w-100">
        <StyledNavbarBrand href="#">gldnpz</StyledNavbarBrand>

        <Navbar.Collapse>
          <Nav>
            <StyledNavLink href="#">Blog</StyledNavLink>
            <StyledNavLink href="#">Projects</StyledNavLink>
            <StyledNavLink href="#">About</StyledNavLink>
          </Nav>
        </Navbar.Collapse>

        <StyledButton>Admin Login</StyledButton>
      </StyledNavBar>
    );
  }
}