import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  box-shadow: 0rem 0.25rem 0.7rem lightgray;
  transition-duration: 0.5s;

  :hover {
    box-shadow: 0rem 0.35rem 1rem gray;
  }
`;

const ShadowCard = (props) => {
  return (
    <StyledCard className={props.className} style={props.style}>
      {props.children}
    </StyledCard>
  );
};

export default ShadowCard;