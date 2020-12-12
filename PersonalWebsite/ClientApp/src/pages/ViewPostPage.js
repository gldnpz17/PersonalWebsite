import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TagButton from "../components/TagButton";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import DOMPurify from "dompurify";
import marked from "marked";
import DateTimeFormatter from "../helpers/DateTimeFormatter";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function ViewPostPage(props) {
  let { postId } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    readPostById(postId);
  }, []);

  const readPostById = async (id) => {
    var response = await fetch(`/api/posts/${id}`, {
      method: "GET",
      headers: {
        "content": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      setPost(await response.json());
    }
  };

  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5 flex-fill d-flex flex-column">
      <Row className="mt-5 ml-1 mr-1 ml-lg-5 mr-lg-5 flex-grow-1 d-flex flex-column">
        <Col className="flex-fill d-flex flex-column">
          <h1 className="text-center">{post?.title}</h1>

          <ThemedCard className="flex-fill d-flex">
            <div className="m-3 h-100 d-flex flex-column flex-fill">
              <h5 className="m-0">Firdaus Bisma Suryakusuma</h5>
              <h6>{DateTimeFormatter.parseToDate(post?.publishDate) + " " + DateTimeFormatter.parseToHoursAndMinutes(post?.publishDate)}</h6>
              <hr className="m-1"/>
              <div className="flex-fill" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked((post === null) ? "" : post.gfmContent))}} />
              <hr className="mt-2 mr-1 ml-1"/>
              <div className="d-flex">
                <span className="d-inline">
                  <p className="pr-2">tags:</p>
                </span>
                <span className="d-inline">
                  {post?.tags?.map(tag => {
                    return(
                      <TagButton tagName={tag.name} />
                      );
                  })}
                </span>
              </div>
            </div>
          </ThemedCard>
        </Col>
      </Row>
    </StyledContainer>
  );
}