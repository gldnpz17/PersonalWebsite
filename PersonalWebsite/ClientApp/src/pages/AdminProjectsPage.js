import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PrimaryThemedFlatCard from "../components/ThemedComponents/PrimaryThemedFlatCard";
import ThemedButton from "../components/ThemedComponents/ThemedButton";
import ThemedSecondaryButton from "../components/ThemedComponents/ThemedSecondaryButton";

export default function AdminProjectsPage(props) {
  const loadProjects = () => {
    return (
      [
        {
          id: "id1",
          projectName: "project1",
          sourceCodeUrl: "url1",
          description: "description1",
          tags: [
            {
              "name": "tag1"
            },
            {
              "name": "tag2"
            }
          ],
          gfmDetails: "project1details"
        },
        {
          id: "id2",
          projectName: "project2",
          sourceCodeUrl: "url2",
          description: "description2",
          tags: [
            {
              "name": "tag2"
            },
            {
              "name": "tag3"
            }
          ],
          gfmDetails: "project2details"
        },
        {
          id: "id3",
          projectName: "project3",
          sourceCodeUrl: "url3",
          description: "description3",
          tags: [
            {
              "name": "tag1"
            },
            {
              "name": "tag3"
            }
          ],
          gfmDetails: "project3details"
        }
      ]
    );
  };
  
  const [projects, setProjects] = useState(loadProjects());

  return (
    <Container fluid className="m-0 p-0 pt-5 pb-5" style={{backgroundColor: "whitesmoke"}}>
      <h2 className="text-center">Projects</h2>
      <div className="d-flex">
        <ThemedButton className="m-2 mr-lg-5 ml-lg-5 flex-grow-1">create new</ThemedButton>
      </div>
      <div className="mr-2 ml-2 mr-lg-5 ml-lg-5 mb-4">
        <Row className="w-100 row-cols-1 row-cols-md-2 row-cols-xl-3 m-0">
          {projects.map(project => {
            return (    
              <Col className="p-0">
                <PrimaryThemedFlatCard className="m-1">
                  <Card.Body>
                    <p className="m-0"><b>{"title: "}</b>{project.projectName}</p>
                    <p><b>{"summary: "}</b>{project.description}</p>
                    <ThemedSecondaryButton className="w-100">delete</ThemedSecondaryButton>
                  </Card.Body>
                </PrimaryThemedFlatCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}