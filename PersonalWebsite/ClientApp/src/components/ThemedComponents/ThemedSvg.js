import styled from "styled-components";

const StyledThemedSvg = styled.svg`
  fill: ${props => props.theme.secondaryDark};
`;

export default function ThemedSvg(props) {
  return (
    <StyledThemedSvg style={props.style} viewBox={props.viewBox} className={props.className}>
      {props.children}
    </StyledThemedSvg>
  );
}