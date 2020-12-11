import { useState } from "react";
import { Card, CardColumns, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import styled from "styled-components";
import EducationCard from "../components/EducationCard";
import PageHeader from "../components/PageHeader";
import SkillTabContent from "../components/SkillTabContent";

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

export default function AboutPage() {
  const [educations, setEducations] = useState(getEducations());

  const [skills, setSkills] = useState(getSkills());

  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5">
      <PageHeader pageTitle="About" pageSubtitle="a little bit about myself" pageDescription="why are you reading this?" />
      <Row className="justify-content-center w-100 m-0">
        <Col className="col-10">
          {/*Education*/}
          <h3 className="text-center">Education</h3>
          <Row className="justify-content-center mb-5">
            <CardColumns id="education-list">
              {
                educations.map((education) => {
                  return (
                    <Row className="justify-content-center">                    
                      <Col className="col-lg-7 col-md-9 col-sm-11" key={education.institutionName}>
                        <EducationCard
                        institutionName={education.institutionName}
                        departmentName={education.departmentName}
                        startYear={education.startYear}
                        endYear={education.endYear}
                        description={education.description} />
                      </Col>
                    </Row>
                  );
                })
              }
            </CardColumns>
          </Row>

          {/*Skills*/}
          <h3 className="text-center">Skills</h3>
          <Row className="justify-content-center">
            <StyledSkillsTabCard id="skills-tab-card" className="w-100">
              <Card.Body>
                <Tab.Container defaultActiveKey="programmingLanguages">
                  <Row>
                    <Col className="col-12 col-lg-2">
                      <Nav className="flex-column" variant="pills" fill justify>
                        <StyledNavItem className="h-100">
                          <Nav.Link className="m-1" eventKey="programmingLanguages">Programming Languages</Nav.Link>
                        </StyledNavItem>
                        <StyledNavItem className="h-100">
                          <Nav.Link className="m-1" eventKey="technologies">Technologies</Nav.Link>
                        </StyledNavItem>
                        <StyledNavItem className="h-100">
                          <Nav.Link className="m-1" eventKey="nonTechnical">Non Technical</Nav.Link>
                        </StyledNavItem>
                      </Nav>
                    </Col>
                    <Col className="col-12 col-lg-10">
                      <Tab.Content>
                        <Tab.Pane eventKey="programmingLanguages">
                          <SkillTabContent skills={skills.filter(i => i.type === "programmingLanguage")} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="technologies">
                          <SkillTabContent skills={skills.filter(i => i.type === "technology")} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="nonTechnical">
                          <SkillTabContent skills={skills.filter(i => i.type === "nonTechnical")} />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Card.Body>
            </StyledSkillsTabCard>
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
        description: "Started learning this language back in high school, currently my primary programming language"
      },
      {
        type: "programmingLanguage",
        name: "Visual Basic",
        percentage: 10,
        description: "the language i used back when i first started learning programming around 9 years ago. i didn't learn much about modern programming using this language though."
      },
      {
        type: "programmingLanguage",
        name: "C",
        percentage: 1,
        description: "not much experience with this language. i've only made simple console programs with this. this might as well be just filler content."
      },        
      {
        type: "programmingLanguage",
        name: "Assembly",
        percentage: 1,
        description: "i'm actually glad i don't have any experience with this language. the thought of assembly programming sends shivers down my spine."
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 3,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 3,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 3,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 3,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 3,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 3,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      },
      {
        type: "programmingLanguage",
        name: "Javascript",
        percentage: 3,
        description: "currently learning frontend web dev so naturally i would learn javascript."
      }
    ]
  );
}