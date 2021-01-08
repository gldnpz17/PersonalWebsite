import React, { useContext, useState } from "react";
import { Button, Collapse, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import AuthContext from "../contexts/AuthContext";
import LoginModal from "./modals/LoginModal";
import ThemedButton from "./ThemedComponents/ThemedButton";
import ThemedSecondaryButton from "./ThemedComponents/ThemedSecondaryButton";

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

  box-shadow: 0rem 0.05rem 0.5rem ${props => props.theme.primaryDark};
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
  const authInfo = useContext(AuthContext);
  
  const openLoginHandler = () => {
    setShowLogin(true);
  }

  const closeLoginHandler = () => {
    setShowLogin(false);
  }

  const logoutHandler = async () => {
    await fetch("/api/auth/logout", {
      method: "POST"
    });

    await authInfo.checkAuthStatus();
  }

  const AuthButton = () => {
    if (authInfo.isLoggedIn) {
      return (<ThemedButton onClick={logoutHandler}>logout</ThemedButton>);
    } else {
      return(<ThemedButton onClick={openLoginHandler}>login</ThemedButton>);
    }
  }

  const AdminNavLink = () => {
    if (authInfo.isLoggedIn) {
      return (<StyledNavLink href="/admin">Admin</StyledNavLink>);
    } else {
      return(<></>);
    }
  }

  return (
    <StyledNavBar expand="md" className="fixed-top w-100">
      <Navbar.Toggle className="navbar-dark" />
      <StyledNavbarBrand href="/">gldnpz</StyledNavbarBrand>

      <Navbar.Collapse>
        <Nav>
          <StyledNavLink href="/blog">Blog</StyledNavLink>
          <StyledNavLink href="/projects">Projects</StyledNavLink>
          <StyledNavLink href="/about">About</StyledNavLink>
          <AdminNavLink />
        </Nav>
      </Navbar.Collapse>

      <AuthButton />

      <LoginModal show={showLogin} onHide={closeLoginHandler}/>
    </StyledNavBar>
  );
}