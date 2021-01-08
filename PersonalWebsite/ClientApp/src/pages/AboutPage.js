import { useState } from "react";
import { Card, CardColumns, CardDeck, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import styled from "styled-components";
import EducationCard from "../components/EducationCard";
import PageHeader from "../components/PageHeader";
import SkillTabContent from "../components/SkillTabContent";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import PrimaryThemedFlatCard from "../components/ThemedComponents/PrimaryThemedFlatCard";
import SkillCard from "../components/skill-card";

import csharpLogo from "../images/csharp_logo.png";
import javascriptLogo from "../images/javascript_logo.png";
import dockerLogo from "../images/docker_logo.png";
import apacheLogo from "../images/apache_logo.png";
import reactLogo from "../images/react_logo.png";
import aspnetcoreLogo from "../images/aspnetcore_logo.png";
import expressLogo from "../images/express_logo.png";
import redisLogo from "../images/redis_logo.png";
import postgresLogo from "../images/postgres_logo.png";
import mongodbLogo from "../images/mongodb_logo.png";
import graphqlLogo from "../images/graphql_logo.png";

import lineLogo from "../images/line_logo.png";
import whatsappLogo from "../images/whatsapp_logo.png";
import telegramLogo from "../images/telegram_logo.png";

import ShadowCard from "../components/shadow-card";
import ContactCard from "../components/contact-card";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

const StyledSkillsTabCard = styled(Card)`
  border-width: 1px;
  border-color: #1c313a;
  box-shadow: 5px 3px 3px grey;
`;

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

const StyledTimelineDiv = styled.div`
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
 
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 0.1rem;
    transform: translateX(-0.05rem);
    background: linear-gradient(to bottom , transparent, ${props => props.theme.secondary} 4rem, ${props => props.theme.secondary} calc(100% - 4rem), transparent);
  }
`;

const StyledTimelineContainer = styled.div`
  width: 50%;
  position: relative;
  margin-bottom: 2rem;

  &::after {
    content: "";
    position: absolute;
    background-color: white;
    z-index: 1;
    width: 1.2rem;
    height: 1.2rem;
    top: 50%;
    border: 0.1rem solid ${props => props.theme.secondary};
    border-radius: 50%;
    transform: translateY(-50%);

    transition-duration: 1.5s;
  }

  &.left::after {
    left: calc(100% - 0.6rem);
  }

  &.right::after {
    left: -0.6rem;
  }

  &:hover {
    ::after {
      background-color: ${props => props.theme.secondaryLight};
      border: 0.1rem solid ${props => props.theme.secondaryDark};

      transition-duration: 0.5s;
    }
  }

  &.left {
    padding-right: 2rem;
  }

  &.right {
    left: 50%;
    padding-left: 2rem;
  }
`;

const StyledTimelineCard = styled(ShadowCard)`
  height: 5rem;
`;

export default function AboutPage() {
  const [educations, setEducations] = useState(getEducations());

  const [skills, setSkills] = useState(getSkills());

  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5">
      <PageHeader pageTitle="About" pageSubtitle="a little bit about myself" pageDescription="some general information about myself and my contact information. you could also download an automatically generated resume(wip)." />
      <Row className="justify-content-center w-100 m-0">
        <Col className="col-10">
          {/*Education*/}
          <h2 className="text-center">Education</h2>
          <StyledTimelineDiv className="mb-5">
            {
              educations.map((education, index) => {
                return (               
                  <StyledTimelineContainer className={(index % 2 == 0) ? "left" : "right"} key={education.institutionName}>
                    <EducationCard
                      institutionName={education.institutionName}
                      departmentName={education.departmentName}
                      startYear={education.startYear}
                      endYear={education.endYear}
                      description={education.description} />
                  </StyledTimelineContainer>
                );
              })
            }
          </StyledTimelineDiv>

          {/*New Skills*/}
          <h2 className="text-center mb-2">Skills</h2>
          <h4 className="text-center mb-0">Programming Languages</h4>
          <Row className="justify-content-center mb-4">
            <SkillCard skillName="C-Sharp" src={csharpLogo} />
            <SkillCard skillName="Javascript" src={javascriptLogo} />
          </Row>
          <h4 className="text-center mb-0">Technologies</h4>
          <Row className="justify-content-center mb-5">
            <SkillCard skillName="React.js" src={reactLogo} />
            <SkillCard skillName="ASP.NET Core" src={aspnetcoreLogo} />
            <SkillCard skillName="Express.js" src={expressLogo} />
            <SkillCard skillName="GraphQL" src={graphqlLogo} />
            <SkillCard skillName="PostgreSQL" src={postgresLogo} />
            <SkillCard skillName="MongoDB" src={mongodbLogo} />
            <SkillCard skillName="Redis" src={redisLogo} />
            <SkillCard skillName="Apache" src={apacheLogo} />
            <SkillCard skillName="Docker" src={dockerLogo} />
          </Row>

          {/*Achievements and Experiences*/}
          <h2 className="text-center">Achievements and Experiences</h2>
          <h1 className="text-center mb-5" style={{color: "darkgray"}}>nothing to show yet, unfortunately 😢</h1>

          {/*Contact*/}
          <h2 className="text-center">Contacts</h2>
          <Row className="justify-content-center">
            <ContactCard type="LINE" contact="goldenpanzer17" src={lineLogo} />
            <ContactCard type="Whatsapp" contact="(+62)88803988161" src={whatsappLogo} />
            <ContactCard type="Telegram" contact="(+62)88803988161" src={telegramLogo} />
          </Row>
        </Col>
      </Row>
    </StyledContainer>
  );
}

function getEducations() {
  return (
    [
      {
        institutionName: "Universitas Gadjah Mada", 
        departmentName: "Information Technology", 
        startYear: "2019", 
        endYear: "Present", 
        description: "Participated in some IT-related competitions(hackathons, competitive programming and data science competitions). Current GPA is 2.96."
      },
      {
        institutionName: "SMAN 8 Yogyakarta", 
        departmentName: "Natural Sciences", 
        startYear: "2016", 
        endYear: "2019", 
        description: "Joined the school’s competitive programming club and participated in the city-level national science olympiad (informatics branch)."
      },
      {
        institutionName: "SMPN 5 Yogyakarta", 
        departmentName: "Acceleration Program", 
        startYear: "2014", 
        endYear: "2016", 
        description: "No description."},
      {
        institutionName: "SDN Keputran A Yogyakarta", 
        departmentName: null, 
        startYear: "2014", endYear: "2011", 
        description: "No description."
      },
      {
        institutionName: "SD Muhammadiyah Sapen Yogyakarta",
        departmentName: "CI MIPA Program", 
        startYear: "2010", endYear: "2011", 
        description: "No description."
      },
      {
        institutionName: "SD Muhammadiyah Sapen Nitikan",
        departmentName: null, 
        startYear: "2008", endYear: "2010", 
        description: "No description."
      }
    ]
  );
}

function getSkills() {
  return (
    [
      {
        type: "programmingLanguage",
        name: "C#",
        percentage: 25,
        description: "started learning this language back in high school, currently my primary programming language"
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 10,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      },
      {
        type: "programmingLanguage",
        name: "Visual Basic",
        percentage: 5,
        description: "the programming language i used to learn back when i first started learning programming. it's outdated and no longer supported so this skill is useless."
      },
      {
        type: "programmingLanguage",
        name: "C",
        percentage: 1,
        description: "[Practically Filler Content] not much experience with this language. i've only made simple console programs with this. this might as well be just filler content."
      },        
      {
        type: "programmingLanguage",
        name: "Assembly",
        percentage: 1,
        description: "[Practically Filler Content] i'm actually glad i don't have any experience with this language. the thought of assembly programming sends shivers down my spine."
      },
      {
        type: "programmingLanguage",
        name: "C++",
        percentage: 1,
        description: "[Practically Filler Content] used to learn this language back when i was learning competetive programming back in high school."
      },
      {
        type: "programmingLanguage",
        name: "Python",
        percentage: 1,
        description: "[Practically Filler Content] tried learning django a while but i wasn't quite used to not having intellisense so i put it on hold for the time being."
      },
      {
        type: "programmingLanguage",
        name: "Java",
        percentage: 1,
        description: "[Practically Filler Content] was planning on learning java and android development but i fell down the design patterns and architecture rabbit hole."
      },
      {
        type: "programmingLanguage",
        name: "Kotlin",
        percentage: 1,
        description: "[Practically Filler Content] maybe i should learn java first?"
      },
      {
        type: "programmingLanguage",
        name: "Go",
        percentage: 1,
        description: "[Practically Filler Content] wrote a simple program. other than that, nothing much in terms of experience with this language."
      },
      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },
      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },      {
        type: "loremipsum",
        name: "Lorem Ipsum",
        percentage: 1,
        description: "can't come up with a good filler content right now so here's a bunch of lorem ipsum"
      },
      {
        type: "nonTechnical",
        name: "English",
        percentage: 45,
        description: "i forgot where i put my TOEFL ITP and AcEPT certificates."
      },
      {
        type: "nonTechnical",
        name: "Indonesian",
        percentage: 85,
        description: "native-level fluency, but sometimes make spelling and grammatical mistakes."
      },
      {
        type: "nonTechnical",
        name: "Javanese",
        percentage: 3,
        description: "despite being a javanese person, i'm not actually that fluent in javanese."
      }
    ]
  );
}