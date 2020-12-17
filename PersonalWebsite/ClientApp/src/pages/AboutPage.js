import { useState } from "react";
import { Card, CardColumns, CardDeck, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import styled from "styled-components";
import EducationCard from "../components/EducationCard";
import PageHeader from "../components/PageHeader";
import SkillTabContent from "../components/SkillTabContent";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import PrimaryThemedFlatCard from "../components/ThemedComponents/PrimaryThemedFlatCard";

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
      <PageHeader pageTitle="About" pageSubtitle="a little bit about myself" pageDescription="some general information about myself and my contact information. you could also download an automatically generated resume(wip)." />
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
          <Row className="justify-content-center mb-5">
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
                          <Nav.Link className="m-1" eventKey="loremipsum">Lorem Ipsum</Nav.Link>
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
                        <Tab.Pane eventKey="loremipsum">
                          <SkillTabContent skills={skills.filter(i => i.type === "loremipsum")} />
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
          
          {/*Achievements and Experiences*/}
          <h3 className="text-center">Achievements and Experiences</h3>
          <h1 className="text-center mb-5" style={{color: "darkgray"}}>nothing to show yet, unfortunately 😢</h1>

          {/*Contact*/}
          <h3 className="text-center">Contacts</h3>
          <ThemedCard>
            <Card.Body>
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                <Col className="p-1">
                  <PrimaryThemedFlatCard>
                    <Card.Body>
                      <Row>
                        <Col className="col-auto p-1">
                          <img style={{maxWidth:"4rem", maxHeight:"4rem"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/480px-LINE_logo.svg.png" />
                        </Col>
                        <Col className="p-1 align-content-center">
                          <h3 className="m-0">LINE</h3>
                          <p className="m-0">goldenpanzer17</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </PrimaryThemedFlatCard>
                </Col>
                <Col className="p-1">
                  <PrimaryThemedFlatCard>
                    <Card.Body>
                      <Row>
                        <Col className="col-auto p-1">
                          <img style={{maxWidth:"4rem", maxHeight:"4rem"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" />
                        </Col>
                        <Col className="p-1 align-content-center">
                          <h3 className="m-0">WhatsApp</h3>
                          <p className="m-0">(+62)88803988161</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </PrimaryThemedFlatCard>
                </Col>
                <Col className="p-1">
                  <PrimaryThemedFlatCard>
                    <Card.Body>
                      <Row>
                        <Col className="col-auto p-1">
                          <img style={{maxWidth:"4rem", maxHeight:"4rem"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/500px-Telegram_logo.svg.png" />
                        </Col>
                        <Col className="p-1 align-content-center">
                          <h3 className="m-0">Telegram</h3>
                          <p className="m-0">(+62)88803988161</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </PrimaryThemedFlatCard>
                </Col>
              </Row>
            </Card.Body>
          </ThemedCard>
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