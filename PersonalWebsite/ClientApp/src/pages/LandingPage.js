import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ShadowCard from "../components/shadow-card";
import SiteContentCard from "../components/SiteContentCard";
import ThemedButton from "../components/ThemedComponents/ThemedButton";
import ThemedSvg from "../components/ThemedComponents/ThemedSvg";

const StyledContainer = styled(Container)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textOnPrimary};
`;

const StyledProfilePicture = styled.img`
  width: 9rem;
  border-radius: 50%;
  box-shadow: 0rem 0.25rem 0.5rem ${props => props.theme.primaryDark};
`;

const StyledSection = styled(Row)`
  min-height: 100vh;
`;

const StyledShortBio = styled.div`
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.6rem;
  }
`;

const StyledSiteContents = styled.div`
`;

const LandingPage = () => {
  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pt-xl-0 pb-5 flex-fill">
      <Row className="mx-4 my-5 my-xl-4">
        <StyledSection className="row-cols-1 row-cols-xl-2">
          <Col className="d-flex d-inline-block ml-0">
            <StyledShortBio className="my-auto">
              <StyledProfilePicture className="d-block mx-auto mb-3" src="./logo.png"/>
              <h1 className="text-center mb-0 d-none d-sm-block">Firdaus Bisma Suryakusuma</h1>
              <h2 className="text-center mb-0">Amateur software developer, Undergraduate IT student</h2>
              <p className="text-justify mt-2 mx-5">First of all, thanks a lot for paying a visit 👋. Also, i apologize for the (currently) awful website. i've only started learning frontend web development relatively recently (used to exclusively study backend development prior to this). I'm open to every possible opportunity in order to improve my skills. (Contact informations are in the about page)</p>
            </StyledShortBio>
          </Col>
          <Col className="d-flex d-inline-block m-0">
            <StyledSiteContents className="my-auto">
              <h2 className="text-center">Site Contents</h2>
              <Row className="row-cols-1 row-cols-xl-1 w-100 m-0">
                <Col className="p-2">
                  <SiteContentCard entranceDelay="0s"
                    title="Blog"
                    subtitle="Random thoughts"
                    description="Not really a blog to be honest. The plan is to make it sort of like a place to vent out my thoughts in general. Might diverge from a blog in the traditional sense in the future 🤷‍♂️. Might even post memes here."
                    relativePath="/blog"
                    svgPath={<path d="M16,15H9V13H16M19,11H9V9H19M19,7H9V5H19M21,1H7C5.89,1 5,1.89 5,3V17C5,18.11 5.9,19 7,19H21C22.11,19 23,18.11 23,17V3C23,1.89 22.1,1 21,1M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3Z"/>}
                    backgroundImage="stock-images/blog-background.jpg"
                    imageBrightness="50%" />
                </Col>
                <Col className="p-2">
                  <SiteContentCard entranceDelay="0.15s"
                    title="Projects"
                    subtitle="Projects i've worked on"
                    description="A complete list of projects i've worked on. This is also where i keep the documentation for my projects(wip). You could also download an automatically generated portfolio(wip)."
                    relativePath="/projects"
                    svgPath={<path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />}
                    backgroundImage="stock-images/projects-background.jpg" />
                </Col>
                <Col className="p-2">
                  <SiteContentCard entranceDelay="0.3s"
                    title="About"
                    subtitle="A little bit about myself"
                    description="Some general information about myself and my contact information. You could also download an automatically generated resume(wip)."
                    relativePath="/about"
                    svgPath={<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />}
                    backgroundImage="stock-images/about-background.jpg" />
                </Col>
              </Row>
            </StyledSiteContents>
          </Col>
        </StyledSection>
      </Row>
    </StyledContainer>
  );
};

export default LandingPage;