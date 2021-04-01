import { Container } from "react-bootstrap";
import styled from "styled-components";
import ThemedSvg from "../components/ThemedComponents/ThemedSvg";
import screenSize from "../helpers/ScreenSize";

const StyledContainer = styled(Container)`

`;

const StyledContentDiv = styled.div`
  color: whitesmoke;

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

const StyledLetInLink = styled.a`
  color: whitesmoke;
  fill: whitesmoke;

  p {
    margin-right: 0.2rem;

    transition-duration: 0.3s;
  }

  transition-duration: 0.3s;

  :hover {
    color: whitesmoke;
    text-decoration: underline;

    p {
      margin-right: 0.6rem;
    }
  }
`;

const UnderConstructionPage = (props) => {
  return(
    <StyledContainer fluid className="d-flex flex-column justify-content-center vh-100">
      <StyledBackgroundImage className="w-100 h-100" />
      <StyledContentDiv className="w-auto mx-auto">
        <h1 className="text-center w-auto">🚧 Under Construction 🚧</h1>
        <h2 className="text-center w-auto mb-5">Massive overhaul underway. This website's a mess.</h2>
        <StyledLetInLink href="landing" className="text-center d-block w-auto">
          <p className="d-inline my-auto">let me in anyway</p>
          <svg style={{width:"1.4em", height:"1.4em"}} viewBox="0 0 24 24">
            <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z" />
          </svg>
        </StyledLetInLink>
      </StyledContentDiv>
    </StyledContainer>
  );
};

export default UnderConstructionPage;