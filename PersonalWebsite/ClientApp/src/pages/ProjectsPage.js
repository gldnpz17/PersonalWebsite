import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import TagButton from "../components/TagButton";
import ThemedButton from "../components/ThemedComponents/ThemedButton";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import ProjectDetailsPage from "./ProjectDetailsPage";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function ProjectsPage(props) {
  let match = useRouteMatch();

  const [projects, setProjects] = useState(
    [
      {
        projectId: 0,
        projectName: "Project1",
        projectStatus: "maintained",
        projectDescription: "Project1Desc",
        ProjectTags: [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        projectId: 1,
        projectName: "Project2",
        projectStatus: "completed",
        projectDescription: "Project2Desc",
        ProjectTags: [
          "tag4",
          "tag5",
          "tag6"
        ]
      },
      {
        projectId: 2,
        projectName: "Project3",
        projectStatus: "abandoned",
        projectDescription: "Project3Desc",
        ProjectTags: [
          "tag7",
          "tag8",
          "tag9",
          "tag10",
          "tag11",
          "tag12",
          "tag13",
          "tag14",
          "tag15"
        ]
      }
    ]
  );

  return (
    <Switch>
      <Route path={`${match.path}/:projectId`}>
        <ProjectDetailsPage />
      </Route>

      <Route>
        <StyledContainer fluid className="m-0 p-0 pt-5 pb-5">
          <PageHeader pageTitle="Projects" pageSubtitle="They're all awful projects" pageDescription="why are you here?" />
          <Row className="ml-1 ml-lg-5 mr-1 mr-lg-5">
            <Col>
              <Row className="row-cols-1 ml-1 ml-lg-5 mr-1 mr-lg-5">
                {projects.map(project => {
                  return(
                    <Col className="pb-3">
                      <ThemedCard>
                        <Card.Body>
                          <div className="d-flex">
                            <h5 className="flex-grow-1">{project.projectName}</h5>
                            <h5 style={{color: "darkgray"}}>{project.projectStatus}</h5>
                          </div>
                          <div>
                            <p>{project.projectDescription}</p>
                          </div>
                          <div className="d-flex justify-content-end w-100">
                            <ThemedButton className="mb-2" href={`${match.path}/${project.projectId}`}>
                              details
                            </ThemedButton>
                          </div>
                          <hr class="solid" />
                          <div className="d-flex">
                            <span className="d-inline">
                              <p className="pr-2">tags:</p>
                            </span>
                            <span className="d-inline">
                              {project.ProjectTags.map(tag => {
                                return(
                                  <TagButton tagName={tag} />
                                  );
                              })}
                            </span>
                          </div>
                        </Card.Body>
                      </ThemedCard>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </StyledContainer>
      </Route>
    </Switch>
  );
}