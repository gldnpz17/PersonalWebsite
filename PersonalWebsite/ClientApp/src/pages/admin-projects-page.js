import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AddProjectModal from "../components/modals/add-project-modal";
import PrimaryThemedFlatCard from "../components/themed-components/primary-themed-flat-card";
import ThemedButton from "../components/themed-components/themed-button";
import ThemedSecondaryButton from "../components/themed-components/themed-secondary-button";

export default function AdminProjectsPage(props) {
  const [projects, setProjects] = useState(null);
  const [showCreateProject, setShowCreateProject] = useState(false);

  useEffect(() => {
    readProjects();
  }, []);

  const readProjects = async () => {
    var response = await fetch("/api/projects", {
      method: "GET",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      setProjects(await response.json());
    }
  }

  const deleteProject = async (projectId) => {
    await fetch(`/api/projects/${projectId}`, {
      method: "DELETE"
    });

    await readProjects();
  }

  const openCreateProject = () => {
    setShowCreateProject(true);
  }

  const closeCreateProject = async () => {
    await readProjects();

    setShowCreateProject(false);
  }

  const EditProjects = () => {
    if (projects === null || projects.length === 0) {
      return (<h3 style={{color: "darkgray"}} className="text-center">no data to display</h3>);
    } else {
      return (
        <Row className="w-100 row-cols-1 row-cols-md-2 row-cols-xl-3 m-0">
          {projects.map(project => {
            return (
              <Col className="p-0">
                <PrimaryThemedFlatCard className="m-1">
                  <Card.Body>
                    <p className="m-0"><b>{"title: "}</b>{project.projectName}</p>
                    <p><b>{"summary: "}</b>{project.description}</p>
                    <ThemedSecondaryButton className="w-100" onClick={() => {deleteProject(project.id)}}>delete</ThemedSecondaryButton>
                  </Card.Body>
                </PrimaryThemedFlatCard>
              </Col>
            )})
          }
        </Row>
      )
    }
  }

  return (
    <Container fluid className="m-0 p-0 pt-5 pb-5" style={{backgroundColor: "whitesmoke"}}>
      <h2 className="text-center">Projects</h2>
      <div className="d-flex">
        <ThemedButton className="m-2 mr-lg-5 ml-lg-5 flex-grow-1" onClick={openCreateProject}>create new</ThemedButton>
      </div>
      <div className="mr-2 ml-2 mr-lg-5 ml-lg-5 mb-4">
        <EditProjects />
      </div>

      <AddProjectModal show={showCreateProject} onHide={closeCreateProject} />
    </Container>
  );
}