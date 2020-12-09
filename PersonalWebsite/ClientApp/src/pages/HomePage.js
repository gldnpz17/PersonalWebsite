import React from "react";
import "./HomePage.scss";
import EducationCard from "../components/EducationCard";
import {Button, Card, CardColumns, CardDeck, Col, Container, Jumbotron, Nav, NavItem, Row, Tab} from "react-bootstrap";
import SkillTabContent from "../components/SkillTabContent";
import styled from "styled-components";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import ThemedButton from "../components/ThemedComponents/ThemedButton";
import ThemedSvg from "../components/ThemedComponents/ThemedSvg";

const StyledNavItem = styled(Nav.Item)`
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

const StyledPeekingKurumi = styled.img`
  height: 15rem;
  animation-duration: 1s;
  animation-name: kurumi-entrance-anim;

  @keyframes kurumi-entrance-anim {
    from {
      transform: translateX(100%)
    }

    to {
      transform: translateX(0%);
    }
  }
`;

const StyledProfilePicture = styled.img`
  min-width: 5rem;
  width: 5rem;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: #455a64;
`;

const StyledSkillsTabCard = styled(Card)`
  border-width: 1px;
  border-color: #1c313a;
  box-shadow: 5px 3px 3px grey;
`;

const StyledJumbotron = styled(Jumbotron)`
  background-color: #718792;
  color: white;
`;

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

const StyledSelfIdentityRow = styled(Row)`
  animation-duration: 1s;
  animation-name: identity-entrance-anim;
  
  @keyframes identity-entrance-anim {
    from {
      transform: translateY(10%);
      opacity: 0;
    }

    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

export default function HomePage(props) {
  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5">
      <StyledJumbotron fluid className="mb-5 pl-lg-5 pl-sm-3">
        <Row className="w-100 m-0 flex-nowrap">
          <Col className="col-10">
            <StyledSelfIdentityRow className="d-flex flex-nowrap">
              <Col className="p-2 col-auto">
                <StyledProfilePicture className="img-fluid" src="./logo.png"/>
              </Col>
              <Col className="col-lg-6 p-0">
                <h1 className="mb-0">Firdaus Bisma Suryakusuma</h1>
                <h5>amateur software developer, undergraduate IT student</h5>
                <p className="text-justify">first of all, thanks for paying a visit 👋. also, i apologize for the (currently) awful website. i've only started learning web development around a month ago. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget mattis magna, ut rutrum libero. Praesent pellentesque tincidunt posuere. </p>
              </Col>
            </StyledSelfIdentityRow>
          </Col>
          <Col className="col-auto p-0 ml-auto">
            <StyledPeekingKurumi className="" src="./PeekingKurumi.png" />
          </Col>
        </Row>
      </StyledJumbotron>
      <Row className="ml-5 mr-5">
        <Col>
          <h2 className="text-center">Site Contents</h2>
          <Row className="mb-5">
            <CardDeck>
              <ThemedCard className="ml-2 mr-2 mb-4">
                <Card.Body>
                  <div className="d-flex mb-1">
                    <ThemedSvg style={{width: "2rem", height: "2rem"}} viewBox="0 0 24 24" className="mr-2">
                      <path d="M16,15H9V13H16M19,11H9V9H19M19,7H9V5H19M21,1H7C5.89,1 5,1.89 5,3V17C5,18.11 5.9,19 7,19H21C22.11,19 23,18.11 23,17V3C23,1.89 22.1,1 21,1M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3Z" />
                    </ThemedSvg>
                    <h4 className="m-0 flex-grow-1">Blog</h4>
                    <ThemedButton className="pt-0 pb-0">visit</ThemedButton>
                  </div>
                  <h6>random thoughts</h6>
                  <p>not really a blog to be honest. the plan is to make it sort of like a place to vent out my thoughts in general. might diverge from a blog in the traditional sense in the future, who knows 🤷‍♂️. might even post memes here.</p>
                </Card.Body>
              </ThemedCard>
              <ThemedCard className="ml-2 mr-2 mb-4">
                <Card.Body>
                  <div className="d-flex mb-1">
                    <ThemedSvg style={{width: "2rem", height: "2rem"}} viewBox="0 0 24 24" className="mr-2">
                      <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
                    </ThemedSvg>
                    <h4 className="m-0 flex-grow-1">Projects</h4>
                    <ThemedButton className="pt-0 pb-0">visit</ThemedButton>
                  </div>
                  <h6>projects i've worked on</h6>
                  <p></p>
                </Card.Body>
              </ThemedCard>
              <ThemedCard className="ml-2 mr-2 mb-4">
                <Card.Body>
                  <div className="d-flex mb-1">
                    <ThemedSvg style={{width: "2rem", height: "2rem"}} viewBox="0 0 24 24" className="mr-2">
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </ThemedSvg>
                    <h4 className="m-0 flex-grow-1">About</h4>
                    <ThemedButton className="pt-0 pb-0">visit</ThemedButton>
                  </div>
                  <h6>know me better, i guess?</h6>
                  <p>not really a blog to be honest. the plan is to make it sort of like a place to vent out my thoughts in general. might diverge from a blog in the traditional sense.</p>
                </Card.Body>
              </ThemedCard>
            </CardDeck> 
          </Row>

          <h2 className="text-center">Changelogs</h2>
          <h1 className="text-center" style={{color: "gray"}}>this feature is a work in progress</h1>
        </Col>
      </Row>
    </StyledContainer>
  );
}
