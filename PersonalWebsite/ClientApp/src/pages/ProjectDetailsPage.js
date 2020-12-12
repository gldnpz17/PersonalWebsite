import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import DOMPurify from "dompurify";
import marked, { parse } from "marked";
import TagButton from "../components/TagButton";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function ProjectDetailsPage(props) {
  let { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    readProject();
  }, []);

  const readProject = async () => {
    var response = await fetch(`/api/projects/${projectId}`, {
      method: "GET",
      headers: {
        "content": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      setProject(await response.json());
    }
  };

  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5 flex-fill d-flex flex-column">
      <Row className="mt-5 mb-0 ml-1 mr-1 ml-lg-5 mr-lg-5 d-flex flex-fill">
        <Col className="d-flex flex-column flex-fill">
          <ThemedCard className="mb-3">
            <Card.Body>
              <div className="d-flex">
                <h5 className="flex-grow-1">{project?.projectName}</h5>
                <h5 style={{color: "slategray"}}>{project?.status}</h5>
              </div>
              <div className="d-flex">
                <h6 className="mr-1">Source Code :</h6>
                <a href={project?.sourceCodeUrl}><h6>{project?.sourceCodeUrl}</h6></a>
              </div>
              <p>{project?.description}</p>
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
          <h3 className="text-center">Project Details</h3>
          <ThemedCard className="flex-fill">
            <Card.Body>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked((project === null) ? "" : project.gfmDetails)) }} />
            </Card.Body>
          </ThemedCard>
        </Col>
      </Row>    
    </StyledContainer>
  );
}