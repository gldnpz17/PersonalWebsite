import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import PrimaryThemedFlatCard from "../components/themed-components/primary-themed-flat-card";
import ThemedButton from "../components/themed-components/themed-button";
import ThemedSecondaryButton from "../components/themed-components/themed-secondary-button";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function AdminProfilePage(props) {
  const loadEducations = () => {
    return (
      [
        {
          institution: "institution1",
          department: "department1",
          startDate: "2020-12-11T20:02:04.327Z",
          endDate: "2020-12-11T20:02:04.327Z",
          description: "description1"
        },
        {
          institution: "institution2",
          department: "department2",
          startDate: "2020-12-11T20:02:04.327Z",
          endDate: "2020-12-11T20:02:04.327Z",
          description: "description2"
        },
        {
          institution: "institution3",
          department: "department3",
          startDate: "2020-12-11T20:02:04.327Z",
          endDate: "2020-12-11T20:02:04.327Z",
          description: "description3"
        },
        {
          institution: "institution4",
          department: "department4",
          startDate: "2020-12-11T20:02:04.327Z",
          endDate: "2020-12-11T20:02:04.327Z",
          description: "description4"
        },
        {
          institution: "institution5",
          department: "department5",
          startDate: "2020-12-11T20:02:04.327Z",
          endDate: "2020-12-11T20:02:04.327Z",
          description: "description5"
        }
      ]
    );
  };
  
  const loadSkills = () => {
    return (
      [
        {
          skillType: {
            name: "type1"
          },
          name: "skill1",
          progress: 0,
          description: "desc1"
        },
        {
          skillType: {
            name: "type1"
          },
          name: "skill2",
          progress: 1,
          description: "desc2"
        },
        {
          skillType: {
            name: "type2"
          },
          name: "skill3",
          progress: 2,
          description: "desc3"
        },
        {
          skillType: {
            name: "type2"
          },
          name: "skill4",
          progress: 3,
          description: "desc4"
        },
        {
          skillType: {
            name: "type2"
          },
          name: "skill5",
          progress: 4,
          description: "desc5"
        }
      ]
    );
  };
  
  const [educations, setEducations] = useState(loadEducations());
  const [skills, setSkills] = useState(loadSkills());

  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5">
      <h2 className="text-center">Education</h2>
      <div className="d-flex">
        <ThemedButton className="m-2 mr-lg-5 ml-lg-5 flex-grow-1">add new</ThemedButton>
      </div>
      <div className="mr-2 ml-2 mr-lg-5 ml-lg-5 mb-4">
        <Row className="w-100 row-cols-1 row-cols-md-2 row-cols-xl-3 m-0">
          {educations.map(education => {
            return (
              <Col className="p-0">
                <PrimaryThemedFlatCard className="m-1">
                  <Card.Body>
                    <p className="m-0"><b>{"institution: "}</b>{education.institution}</p>
                    <p className="m-0"><b>{"department: "}</b>{education.department}</p>
                    <p className="m-0"><b>{"startDate: "}</b>{education.startDate}</p>
                    <p className="m-0"><b>{"endDate: "}</b>{education.endDate}</p>
                    <p><b>{"description: "}</b>{education.description}</p>
                    <ThemedSecondaryButton className="w-100">delete</ThemedSecondaryButton>
                  </Card.Body>
                </PrimaryThemedFlatCard>
              </Col>
            );
          })}
        </Row>
      </div>
      <h2 className="text-center">Skills</h2>
      <div className="d-flex">
        <ThemedButton className="m-2 mr-lg-5 ml-lg-5 flex-grow-1">add new</ThemedButton>
      </div>
      <div className="mr-2 ml-2 mr-lg-5 ml-lg-5 mb-4">
        <Row className="w-100 row-cols-1 row-cols-md-2 row-cols-xl-3 m-0">
          {skills.map(skill => {
            return (
              <Col className="p-0">
                <PrimaryThemedFlatCard className="m-1">
                  <Card.Body>
                    <p className="m-0"><b>{"name: "}</b>{skill.name}</p>
                    <p className="m-0"><b>{"type: "}</b>{skill.skillType.name}</p>
                    <p className="m-0"><b>{"progress: "}</b>{skill.progress}</p>
                    <p><b>{"description: "}</b>{skill.description}</p>
                    <ThemedSecondaryButton className="w-100">delete</ThemedSecondaryButton>
                  </Card.Body>
                </PrimaryThemedFlatCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </StyledContainer>
  );
}