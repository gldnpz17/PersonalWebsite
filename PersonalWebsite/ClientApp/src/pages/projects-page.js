import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/page-header";
import TagButton from "../components/tag-button";
import ThemedButton from "../components/themed-components/themed-button";
import ThemedCard from "../components/themed-components/themed-card";
import ProjectDetailsPage from "./project-details-page";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function ProjectsPage(props) {
  let match = useRouteMatch();

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    readprojects();
  }, []);

  const readprojects = async () => {
    var response = await fetch("/api/projects", {
      method: "GET",
      headers: {
        "content": "application/json",
        "Content-Type": "application/json"
      }
    });

    if ((await response).status === 200) {
      setProjects(await response.json());
    }
  };

  return (
    <Switch>
      <Route path={`${match.path}/:projectId`}>
        <ProjectDetailsPage />
      </Route>

      <Route>
        <StyledContainer fluid className="m-0 p-0 pt-5 pb-5 flex-fill">
          <PageHeader pageTitle="Projects" pageSubtitle="projects i've worked on" pageDescription="a complete list of projects i've worked on. this is also where i keep the documentation for my projects(wip). you could also download an automatically generated portfolio(wip)." />
          <Row className="ml-1 ml-lg-5 mr-1 mr-lg-5">
            <Col>
              <Row className="row-cols-1 ml-1 ml-lg-5 mr-1 mr-lg-5">
                {projects?.map(project => {
                  return(
                    <Col className="pb-3">
                      <ThemedCard>
                        <Card.Body>
                          <div className="d-flex">
                            <h5 className="flex-grow-1">{project.projectName}</h5>
                            <h5 style={{color: "darkgray"}}>{project.status}</h5>
                          </div>
                          <div>
                            <p>{project.description}</p>
                          </div>
                          <div className="d-flex justify-content-end w-100">
                            <ThemedButton className="mb-2" href={`${match.path}/${project.id}`}>
                              details
                            </ThemedButton>
                          </div>
                          <hr class="solid" />
                          <div className="d-flex">
                            <span className="d-inline">
                              <p className="pr-2">tags:</p>
                            </span>
                            <span className="d-inline">
                              {project?.tags?.map(tag => {
                                return(
                                  <TagButton tagName={tag.name} />
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