import { Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledPrimaryThemedNavItem = styled(Nav.Item)`
  & > .nav-link {
    color: white;
    background-color: #455a64;
    box-shadow: 1px 2px 2px grey;
  }

  &:hover > .nav-link{
    background-color: #1c313a;
  }

  & > .nav-link.active {
    background-color: #1c313a;
  }
`;

export default function PrimaryThemedNavItem(props) {
  return (
    <StyledPrimaryThemedNavItem className={props.className}>
      {props.children}
    </StyledPrimaryThemedNavItem>
  );
}