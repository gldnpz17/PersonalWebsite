import { Card } from "react-bootstrap";
import styled from "styled-components";
import ShadowCard from "./shadow-card";
import ThemedButton from "./ThemedComponents/ThemedButton";
import ThemedSvg from "./ThemedComponents/ThemedSvg";

const StyledShadowCard = styled(ShadowCard)`
  transition-duration: 0.5s !important;

  background: ${props => props.theme.primaryDark};

  h4, h6, p {
    color: whitesmoke;
  }

  /*animation-name: entrance-anim;
  animation-duration: 0.5s;
  animation-delay: ${(props => props.entranceDelay) ?? "0s"};
  animation-fill-mode: forwards;
  opacity: 0%;*/

  :hover {
    transform: translateY(-0.25rem);
  }

  /*@keyframes entrance-anim {
    from {
      transform: translateY(2rem);
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }*/
`;

const StyledBackgroundImage = styled.div`
  background: url(${props => props.backgroundImage});
  filter: blur(2px) brightness(${props => props.imageBrightness});
  background-size: cover;

  z-index: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const SiteContentCard = (props) => {
  return (
    <StyledShadowCard className="h-100" onPrimary entranceDelay={props.entranceDelay}>
      <StyledBackgroundImage backgroundImage={props.backgroundImage} imageBrightness={props.imageBrightness} />
      <Card.Body style={{zIndex: 0}}>
        <div className="d-flex mb-1">
          <ThemedSvg style={{width: "2rem", height: "2rem"}} viewBox="0 0 24 24" className="mr-2">
            {props.svgPath}
          </ThemedSvg>
          <h4 className="m-0 flex-grow-1">{props.title}</h4>
          <a><ThemedButton className="py-0" href={props.relativePath}>visit</ThemedButton></a>
        </div>
        <h6>{props.subtitle}</h6>
        <p className="text-justify">{props.description}</p>
      </Card.Body>
    </StyledShadowCard>
  );
}

export default SiteContentCard;