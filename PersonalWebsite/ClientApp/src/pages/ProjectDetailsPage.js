import { useState } from "react";
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

  var loadedProject = loadProject(projectId);

  const [project, setProject] = useState(loadedProject);

  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5 flex-fill d-flex flex-column">
      <Row className="mt-5 mb-0 ml-1 mr-1 ml-lg-5 mr-lg-5 d-flex flex-fill">
        <Col className="d-flex flex-column flex-fill">
          <ThemedCard className="mb-3">
            <Card.Body>
              <div className="d-flex">
                <h5 className="flex-grow-1">{project.projectName}</h5>
                <h5 style={{color: "slategray"}}>{project.projectStatus}</h5>
              </div>
              <div className="d-flex">
                <h6 className="mr-1">Source Code :</h6>
                <a href={project.projectSourceCode}><h6>{project.projectSourceCode}</h6></a>
              </div>
              <p>{project.projectDescription}</p>
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
          <h3 className="text-center">Project Details</h3>
          <ThemedCard className="flex-fill">
            <Card.Body>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(project.projectDetails)) }} />
            </Card.Body>
          </ThemedCard>
        </Col>
      </Row>    
    </StyledContainer>
  );
}

function loadProject(projectId) {
  if (parseInt(projectId) == 0) {
    return (
      {
        projectId: projectId,
        projectName: "Project1",
        projectSourceCode: "https://example.com",
        projectStatus: "maintained",
        projectDescription: "Project1Desc",
        projectDetails: "lorem ipsum",
        ProjectTags: [
          "tag1",
          "tag2",
          "tag3"
        ]
      }
    );
  } else {
    return (
      {
        projectId: projectId,
        projectName: "ProjectX",
        projectSourceCode: "https://example.com",
        projectStatus: "maintained",
        projectDescription: "Project1Desc",
        projectDetails: "### lorem ipsum \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget mattis magna, ut rutrum libero. Praesent pellentesque tincidunt posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel viverra tortor. Quisque quis velit vel metus eleifend hendrerit. Sed porttitor tortor ac semper condimentum. Praesent nisi libero, congue non risus vel, bibendum hendrerit massa. Morbi fringilla viverra diam nec eleifend. Ut luctus, ex in hendrerit varius, lorem risus dignissim dui, et mattis metus lorem a elit. In id eros commodo orci vehicula vestibulum. Phasellus est nulla, mattis id rhoncus nec, porta eu nulla. Cras in ligula nunc. Donec cursus libero ac volutpat sodales. Vivamus pulvinar justo nec dapibus pharetra. \n\n Suspendisse venenatis magna mi, quis convallis enim eleifend at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut porttitor velit eget ex blandit vehicula. Curabitur interdum eros sed dignissim sollicitudin. Pellentesque pretium lorem ut interdum tempor. Suspendisse vestibulum, leo eu molestie viverra, nisl tortor cursus dui, sit amet varius enim purus ornare velit. Ut finibus pellentesque dolor nec lobortis. Mauris nec dapibus justo. Donec semper dictum erat, vel lacinia dui bibendum eu. In ut est placerat ipsum lobortis aliquet id tempus sem.",
        ProjectTags: [
          "tag1",
          "tag2",
          "tag3"
        ]
      }
    );
  }
}