import { Container } from "react-bootstrap";
import styled from "styled-components";
import screenSize from "../helpers/ScreenSize";

const StyledContainer = styled(Container)`

`;

const StyledContentDiv = styled.div`
  color: whitesmoke;

  a {
    color: whitesmoke;
    text-decoration: underline;

    transition-duration: 0.5s;

    :hover {
      color: lightskyblue;
    }
  }

  h1 {
    font-weight: bold;
  }

  @media (max-width: ${screenSize.md}) {
    h1 {
      font-size: 1.7rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
  }

  width: min-content;
`;

const StyledBackgroundImage = styled.div`
  background-image: url("stock-images/construction-background.jpg");
  background-size: cover;
  background-position: center;
  filter: blur(1px) brightness(60%);

  z-index: -1;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const UnderConstructionPage = (props) => {
  return(
    <StyledContainer fluid className="d-flex flex-column justify-content-center vh-100">
      <StyledBackgroundImage className="w-100 h-100" />
      <StyledContentDiv className="w-auto mx-auto">
        <h1 className="text-center w-auto">🚧 Under Construction 🚧</h1>
        <h2 className="text-center w-auto mb-5">Massive overhaul underway. This website's a mess.</h2>
        <a href="landing" className="text-center d-block w-auto">let me in anyway</a>
      </StyledContentDiv>
    </StyledContainer>
  );
};

export default UnderConstructionPage;