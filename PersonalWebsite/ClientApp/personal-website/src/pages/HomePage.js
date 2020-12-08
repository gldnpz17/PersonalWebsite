import React from "react";
import "./HomePage.scss";
import EducationCard from "../components/EducationCard";
import {Button, Card, CardColumns, Col, Container, Jumbotron, Nav, NavItem, Row, Tab} from "react-bootstrap";
import SkillTabContent from "../components/SkillTabContent";
import styled from "styled-components";

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
  max-height: 15rem;
  animation-duration: 1s;
  animation-name: kurumi-entrance-anim;

  @keyframes kurumi-entrance-anim {
    from {
      margin-left: 100%;
    }

    to {
      margin-left: 0%;
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
      margin-top: 5%;
      opacity: 0;
    }

    to {
      margin-top: 0%;
      opacity: 1;
    }
  }
`;

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: [
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
      ],
      skills: [
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
    };
  }

  render() {
    return (
      <StyledContainer fluid className="m-0 p-0 pt-5 pb-5">
        <StyledJumbotron fluid className="mb-5 pl-lg-5 pl-sm-3">
          <Row className="w-100 m-0">
            <Col className="col-10">
              <StyledSelfIdentityRow className="d-flex flex-nowrap">
                <span className="p-2">
                  <StyledProfilePicture className="img-fluid" src="./logo.png"/>
                </span>
                <span className="mr-auto">
                  <h1 className="mb-0">Firdaus Bisma Suryakusuma</h1>
                  <h5>a failure of a human</h5>
                  <p className="text-justify" style={{width:"0px", minWidth:"100%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum et est ac facilisis. Nulla vel enim lacinia, elementum ante nec, porta velit. Elementum ante nec, porta velit. Nulla vel enim lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum et est ac facilisis.</p>
                </span>
              </StyledSelfIdentityRow>
            </Col>
            <Col className="col-auto d-flex p-0 ml-auto">
              <StyledPeekingKurumi src="./PeekingKurumi.png" />
            </Col>
          </Row>
        </StyledJumbotron>
        <Row className="justify-content-center w-100 m-0">
          <Col className="col-10">
            {/*Education*/}
            <h3 className="text-center">Education</h3>
            <Row className="justify-content-center mb-5">
              <CardColumns id="education-list">
                {
                  this.state.educations.map((edu) => {
                    return (
                      <Row className="justify-content-center">                    
                        <Col className="col-lg-7 col-md-9 col-sm-11" key={edu.institutionName}>
                          <EducationCard
                          institutionName={edu.institutionName}
                          departmentName={edu.departmentName}
                          startYear={edu.startYear}
                          endYear={edu.endYear}
                          description={edu.description} />
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
                            <SkillTabContent skills={this.state.skills.filter(i => i.type === "programmingLanguage")} />
                          </Tab.Pane>
                          <Tab.Pane eventKey="technologies">
                            <SkillTabContent skills={this.state.skills.filter(i => i.type === "technology")} />
                          </Tab.Pane>
                          <Tab.Pane eventKey="nonTechnical">
                            <SkillTabContent skills={this.state.skills.filter(i => i.type === "nonTechnical")} />
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
}