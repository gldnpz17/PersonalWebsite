import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom"
import styled from "styled-components";
import PrimaryThemedFlatCard from "../components/ThemedComponents/PrimaryThemedFlatCard";
import PrimaryThemedNavItem from "../components/ThemedComponents/PrimaryThemedNavItem";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import AdminBlogPage from "./AdminBlogPage";
import AdminProfilePage from "./AdminProfilePage";
import AdminProjectsPage from "./AdminProjectsPage";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function AdminWelcomePage(props) {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <StyledContainer fluid className="m-0 p-0 pt-5 pb-5 flex-fill">
          <h1 className="text-center mt-5">Welcome, Admin!</h1>
          <p className="text-center">please forgive the ugly admin dashboard, i was in a hurry since i have to study for the finals.</p>
          <Row className="mr-1 ml-1 mr-lg-5 ml-lg-5">
            <Col>
              <ThemedCard>
                <Card.Body>
                  <Tab.Container defaultActiveKey="blog">
                    <Nav className="flex-column flex-lg-row" variant="pills" fill justify>
                      <PrimaryThemedNavItem className="h-100">
                        <Nav.Link className="m-1" eventKey="blog">blog</Nav.Link>
                      </PrimaryThemedNavItem>
                      <PrimaryThemedNavItem className="h-100">
                        <Nav.Link className="m-1" eventKey="projects">projects</Nav.Link>
                      </PrimaryThemedNavItem>
                      {/*maybe the profile page should just be static for now?
                      <PrimaryThemedNavItem className="h-100">
                        <Nav.Link className="m-1" eventKey="profile">profile</Nav.Link>
                      </PrimaryThemedNavItem>*/}
                    </Nav>
                    <Tab.Content className="mt-3">
                      <Tab.Pane eventKey="blog">
                        <PrimaryThemedFlatCard>
                            <Card.Body className="p-0">
                              <AdminBlogPage />
                            </Card.Body>
                          </PrimaryThemedFlatCard>
                      </Tab.Pane>

                      <Tab.Pane eventKey="projects">
                        <PrimaryThemedFlatCard>
                          <Card.Body className="p-0">
                            <AdminProjectsPage />
                          </Card.Body>
                        </PrimaryThemedFlatCard>
                      </Tab.Pane>

                      {/*maybe the profile page should just be static for now?
                      <Tab.Pane eventKey="profile">
                        <PrimaryThemedFlatCard>
                          <Card.Body className="p-0">
                            <AdminProfilePage />
                          </Card.Body>
                        </PrimaryThemedFlatCard>
                      </Tab.Pane>*/}
                    </Tab.Content>
                  </Tab.Container>
                </Card.Body>
              </ThemedCard>
            </Col>
          </Row>
        </StyledContainer>
      </Route>

      <Route path={`${path}/profile`}>
        <AdminProfilePage />
      </Route>
    </Switch>
  );
}