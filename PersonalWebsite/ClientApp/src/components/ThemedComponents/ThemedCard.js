const { Card } = require("react-bootstrap");
const { default: styled } = require("styled-components");

const StyledThemedCard = styled(Card)`
  border-color: ${props => props.theme.primaryDark};
  box-shadow: 2px 2px 1px grey;
`;

export default function ThemedCard(props) {
  return (
    <StyledThemedCard className={props.className}>
      {props.children}   
    </StyledThemedCard>
  );
}