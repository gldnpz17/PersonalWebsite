import { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import ThemedButton from "../themed-components/themed-button";
import ThemedSecondaryButton from "../themed-components/themed-secondary-button";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import DOMPurify from "dompurify";
import marked from "marked";

export default function AddProjectModal(props) {
  const [project, setProject] = useState(
    {
      projectName: "",
      status: "",
      sourceCodeUrl: "",
      description: "",
      tags: [
        {
          name: "example1"
        },
        {
          name: "example2"
        },
        {
          name: "example3"
        },
        {
          name: "example4"
        },
        {
          name: "example5"
        }
      ],
      gfmDetails: ""
    });
  const [newTagName, setNewTagName] = useState("");

  const createProject = async () => {
    var response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    });

    if (response.status == 200) {
      handleHide();
    }
  }

  const resetProject = () => {
    setProject (
        {
          projectName: "",
          status: "",
          sourceCodeUrl: "",
          description: "",
          tags: [
            {
              name: "example1"
            },
            {
              name: "example2"
            },
            {
              name: "example3"
            },
            {
              name: "example4"
            },
            {
              name: "example5"
            }
          ],
          gfmDetails: ""
        }
    );
  }

  const handleHide = () => {
    resetProject();
    setNewTagName("");
    
    props.onHide();
  }

  const handleProjectNameChange = (e) => {
    setProject(prev => ({
      ...prev,
      projectName: e.target.value
    }));
  };

  const handleStatusChange = (e) => {
    setProject(prev => ({
      ...prev,
      status: e.target.value
    }));
  };

  const handleSourceCodeUrlChange = (e) => {
    setProject(prev => ({
      ...prev,
      sourceCodeUrl: e.target.value
    }));
  };

  const handleDescriptionChange = (e) => {
    setProject(prev => ({
      ...prev,
      description: e.target.value
    }));
  };

  const handleAddtag = (e) => {
    setProject(prev => {
      let newProject = Object.assign({}, prev);
      if (prev.tags.findIndex(i => i.name === e) === -1) {
        newProject.tags.push({ name: e });
      }
      return newProject;
    });
  }

  const handleRemoveTag = (e) => {
    setProject(prev => {
      let newProject = Object.assign({}, prev);
      var index = prev.tags.findIndex(i => i.name === e);
      if (index !== -1) {
        newProject.tags.splice(index, 1);
      }
      return newProject;
    });
  };

  const handleGfmDetailsChange = (e) => {
    setProject(prev => ({
      ...prev,
      gfmDetails: e
    }));
  };

  return (
    <Modal size="xl" centered show={props.show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>create project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="projectNameForm">
            <Form.Label column sm={2}>Project Name</Form.Label>
            <Col sm={10}>
              <Form.Control type="project name" placeholder="project name" value={project.projectName} onChange={handleProjectNameChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="statusForm">
            <Form.Label column sm={2}>Status</Form.Label>
            <Col sm={10}>
              <Form.Control type="status" placeholder="completed, in development, maintained" value={project.status} onChange={handleStatusChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="sourceCodeUrlForm">
            <Form.Label column sm={2}>Source Code</Form.Label>
            <Col sm={10}>
              <Form.Control type="source code" placeholder="https://example.com" value={project.sourceCodeUrl} onChange={handleSourceCodeUrlChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="descriptionForm">
            <Form.Label column sm={2}>Description</Form.Label>
            <Col sm={10}>
              <Form.Control type="description" placeholder="description" value={project.description} onChange={handleDescriptionChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} inline controlId="tagForm">
            <Form.Label column sm={2}>Tags</Form.Label>
            <Col sm={10}>
              <div className="w-100 d-flex">
                <Form.Control className="flex-grow-1" style={{width: "auto"}} type="tag-name" placeholder="tag name" value={newTagName} onChange={(e) => {setNewTagName(e.target.value)}}/>
                <ThemedButton className="ml-2" 
                  onClick={
                    () => {
                      handleAddtag(newTagName); 
                      setNewTagName("");
                      }}>add tag</ThemedButton>
              </div>
              <div className="w-100">
                <p className="m-0">press on a tag to remove it</p>
                <div>
                  {project.tags.map(tag => {
                    return (<ThemedSecondaryButton className="pt-0 pb-0 m-1" onClick={() => {handleRemoveTag(tag.name)}}>{tag.name}</ThemedSecondaryButton>);
                  })}
                </div>
              </div>
            </Col>
          </Form.Group>

          <p>details(single line breaks disabled) :</p>
          <SimpleMDE 
            onChange={handleGfmDetailsChange} 
            options={{
              renderingConfig: {
                singleLineBreaks: false
              }
            }}
            />

          <p>preview :</p>
          <div className="flex-fill" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(project.gfmDetails))}} />
        </Form>
        <Row className="m-0">
          <Col className="p-0 pr-1">
            <ThemedSecondaryButton onClick={handleHide} className="w-100">cancel</ThemedSecondaryButton>
          </Col>
          <Col className="p-0 pl-1">
            <ThemedButton className="w-100" onClick={createProject}>create</ThemedButton>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}