import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledThemedSecondaryButton = styled(Button)`
  color: ${props => props.theme.secondaryDark};
  background-color: transparent;
  border-width: 1px;
  border-color: ${props => props.theme.secondary};

  &:hover {
    color: ${props => props.textOnSecondary};
    background-color: ${props => props.theme.secondary} !important;
    border-width: 1px;
    border-color: ${props => props.theme.secondary};
  }

  &:active {
    color: ${props => props.textOnSecondary};
    background-color: ${props => props.theme.secondary} !important;
    border-width: 1px;
    border-color: ${props => props.theme.secondary} !important;
    box-shadow: 0px 0px 5px ${props => props.theme.secondary} !important;
  }

  &:focus {
    color: ${props => props.textOnSecondary};
    background-color: ${props => props.theme.secondary} !important;
    border-width: 1px;
    border-color: ${props => props.theme.secondaryLight} !important;
    box-shadow: 0px 0px 5px ${props => props.theme.secondary} !important;
  }
  
  &:active:focus {
    color: ${props => props.textOnSecondary};
    background-color: ${props => props.theme.secondary} !important;
    border-width: 1px;
    border-color: ${props => props.theme.secondary} !important;
    box-shadow: 0px 0px 7px ${props => props.theme.secondary} !important;
  }
`;

export default function ThemedSecondaryButton(props) {
  return (
    <StyledThemedSecondaryButton className={props.className} onClick={props.onClick} href={props.href}>
      {props.children}
    </StyledThemedSecondaryButton>
  );
}