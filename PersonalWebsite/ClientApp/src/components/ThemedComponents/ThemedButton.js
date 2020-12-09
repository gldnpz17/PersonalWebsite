import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledThemedButton = styled(Button)`
  background-color: ${props => props.theme.secondary};
  border-width: 1px;
  border-color: ${props => props.theme.secondaryDark};

  &:hover {
    background-color: ${props => props.theme.secondaryDark};
    border-width: 1px;
    border-color: ${props => props.theme.secondaryDark};
  }

  &:active {
    background-color: ${props => props.theme.secondaryDark} !important;
    border-width: 1px;
    border-color: ${props => props.theme.secondaryDark} !important;
    box-shadow: 0px 0px 5px ${props => props.theme.secondaryDark} !important;
  }

  &:focus {
    background-color: ${props => props.theme.secondaryDark} !important;
    border-width: 1px;
    border-color: ${props => props.theme.secondaryLight} !important;
    box-shadow: 0px 0px 5px ${props => props.theme.secondaryDark} !important;
  }
  
  &:active:focus {
    background-color: ${props => props.theme.secondaryDark} !important;
    border-width: 1px;
    border-color: ${props => props.theme.secondaryDark} !important;
    box-shadow: 0px 0px 7px ${props => props.theme.secondaryDark} !important;
  }
`;

export default function ThemedButton(props) {
  return (
    <StyledThemedButton className={props.className} href={props.href}>
      {props.children}
    </StyledThemedButton>
  );    
}