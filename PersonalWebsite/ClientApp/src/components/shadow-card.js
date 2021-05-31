import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  box-shadow: 0rem 0.25rem 0.7rem ${props => props.onPrimary ? props.theme.primaryDark : "lightgray"};
  transition-duration: 0.5s;
  color: black;

  :hover {
    box-shadow: 0rem 0.35rem 1rem ${props => props.onPrimary ? "black" : "gray"};
  }
`;

const ShadowCard = (props) => {
  return (
    <StyledCard {...props} />
  );
};

export default ShadowCard;