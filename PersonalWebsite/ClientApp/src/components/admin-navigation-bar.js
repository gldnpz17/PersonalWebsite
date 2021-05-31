import React, { useState } from "react";
import { Button, Collapse, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LoginModal from "./modals/login-modal";
import ThemedButton from "./themed-components/themed-button";

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
  return (
    <StyledNavBar className="fixed-top w-100">
      <StyledNavbarBrand href="/admin">{"gldnpz<admin>"}</StyledNavbarBrand>
      <Navbar.Collapse />
      <ThemedButton href="/">visit site</ThemedButton>
    </StyledNavBar>
  );
}