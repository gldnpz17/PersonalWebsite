import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledPrimaryThemedFlatCard = styled(Card)`
  border-color: #1c313a;
  border-width: 1px;
`;

export default function PrimaryThemedFlatCard(props) {
  return (
    <StyledPrimaryThemedFlatCard className={props.className} style={props.style}>
      {props.children}
    </StyledPrimaryThemedFlatCard>
  );
}