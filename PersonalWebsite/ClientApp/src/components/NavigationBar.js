import React, { useState } from "react";
import { Button, Collapse, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LoginModal from "./modals/LoginModal";
import ThemedButton from "./ThemedComponents/ThemedButton";

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.secondary};
  border-color: ${props => props.theme.secondaryDark};

  &:hover {
    background-color: ${props => props.theme.secondaryDark};
    border-color: ${props => props.theme.secondaryDark};
  }

  &:active {
    background-color: ${props => props.theme.secondaryDark} !important;
    border-color: ${props => props.theme.secondaryLight} !important;
    border-width: 2px !important;
    box-shadow: 0px 0px 0px;
  }

  &:focus {
    background-color: ${props => props.theme.secondaryDark} !important;
    border-color: ${props => props.theme.secondaryLight} !important;
    box-shadow: 0px 0px 0px;
  }
  
  &:active:focus {
    background-color: ${props => props.theme.secondaryDark} !important;
    border-color: ${props => props.theme.secondaryLight} !important;
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

export default function NavigationBar(props) {
  const [showLogin, setShowLogin] = useState(false);
  
  const openLogin = () => {
    setShowLogin(true);
  }

  const closeLogin = () => {
    setShowLogin(false);
  }

  return (
    <StyledNavBar className="fixed-top w-100">
      <StyledNavbarBrand href="/">gldnpz</StyledNavbarBrand>

      <Navbar.Collapse>
        <Nav>
          <StyledNavLink href="/blog">Blog</StyledNavLink>
          <StyledNavLink href="/projects">Projects</StyledNavLink>
          <StyledNavLink href="/about">About</StyledNavLink>
        </Nav>
      </Navbar.Collapse>

      <ThemedButton onClick={openLogin}>login</ThemedButton>

      <LoginModal show={showLogin} onHide={closeLogin}/>
    </StyledNavBar>
  );
}