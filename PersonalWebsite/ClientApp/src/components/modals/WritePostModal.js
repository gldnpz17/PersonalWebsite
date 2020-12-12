import { useEffect, useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedSecondaryButton from "../ThemedComponents/ThemedSecondaryButton";
import ThemedSvg from "../ThemedComponents/ThemedSvg";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import DOMPurify from "dompurify";
import marked from "marked";

export default function WritePostModal(props) {
  const [post, setPost] = useState(
    {
      title: "",
      summary: "",
      gfmContent: "",
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
      ]
    });
  const [newTagName, setNewTagName] = useState("");

  const createPost = () => {
    
  }

  const resetPost = () => {
    setPost (
      {
        title: "",
        summary: "",
        gfmContent: "",
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
        ]
      }
    );
  }

  const handleHide = () => {
    resetPost();
    setNewTagName("");
    
    props.onHide();
  }

  const handleTitleChange = (e) => {
    setPost(prev => ({
      ...prev,
      title: e.target.value
    }));
  };

  const handleSummaryChange = (e) => {
    setPost(prev => ({
      ...prev,
      summary: e.target.value
    }));
  };

  const handleAddtag = (e) => {
    setPost(prev => {
      let newPost = Object.assign({}, prev);
      if (prev.tags.findIndex(i => i.name === e) === -1) {
        newPost.tags.push({ name: e });
      }
      return newPost;
    });
  }

  const handleRemoveTag = (e) => {
    setPost(prev => {
      let newPost = Object.assign({}, prev);
      var index = prev.tags.findIndex(i => i.name === e);
      if (index !== -1) {
        newPost.tags.splice(index, 1);
      }
      return newPost;
    });
  };

  const handleGfmContentChange = (e) => {
    setPost(prev => ({
      ...prev,
      gfmContent: e
    }));
  };

  return (
    <Modal size="xl" centered show={props.show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>write post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} controlId="titleForm">
            <Form.Label column sm={2}>Title</Form.Label>
            <Col sm={10}>
              <Form.Control type="title" placeholder="title" value={post.title} onChange={handleTitleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="summaryForm">
            <Form.Label column sm={2}>Summary</Form.Label>
            <Col sm={10}>
              <Form.Control type="summary" placeholder="summary" value={post.summary} onChange={handleSummaryChange}/>
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
                  {post.tags.map(tag => {
                    return (<ThemedSecondaryButton className="pt-0 pb-0 m-1" onClick={() => {handleRemoveTag(tag.name)}}>{tag.name}</ThemedSecondaryButton>);
                  })}
                </div>
              </div>
            </Col>
          </Form.Group>

          <p>content :</p>
          <SimpleMDE 
            onChange={handleGfmContentChange} 
            options={{
              renderingConfig: {
                singleLineBreaks: false
              }
            }}
            />

          <p>preview :</p>
          <div className="flex-fill" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(post.gfmContent))}} />
        </Form>
        <Row className="m-0">
          <Col className="p-0 pr-1">
            <ThemedSecondaryButton onClick={handleHide} className="w-100">cancel</ThemedSecondaryButton>
          </Col>
          <Col className="p-0 pl-1">
            <ThemedButton className="w-100">post</ThemedButton>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}