import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TagButton from "../components/TagButton";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import DOMPurify from "dompurify";
import marked from "marked";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function ViewPostPage(props) {
  let { postId } = useParams(); 

  const [post, setPost] = useState(
    {
      postTitle: "Post1",
      postCreatedDate: "0 January 2020",
      postContent: "### lorem ipsum \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget mattis magna, ut rutrum libero. Praesent pellentesque tincidunt posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel viverra tortor. Quisque quis velit vel metus eleifend hendrerit. Sed porttitor tortor ac semper condimentum. Praesent nisi libero, congue non risus vel, bibendum hendrerit massa. Morbi fringilla viverra diam nec eleifend. Ut luctus, ex in hendrerit varius, lorem risus dignissim dui, et mattis metus lorem a elit. In id eros commodo orci vehicula vestibulum. Phasellus est nulla, mattis id rhoncus nec, porta eu nulla. Cras in ligula nunc. Donec cursus libero ac volutpat sodales. Vivamus pulvinar justo nec dapibus pharetra. \n\n Suspendisse venenatis magna mi, quis convallis enim eleifend at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut porttitor velit eget ex blandit vehicula. Curabitur interdum eros sed dignissim sollicitudin. Pellentesque pretium lorem ut interdum tempor. Suspendisse vestibulum, leo eu molestie viverra, nisl tortor cursus dui, sit amet varius enim purus ornare velit. Ut finibus pellentesque dolor nec lobortis. Mauris nec dapibus justo. Donec semper dictum erat, vel lacinia dui bibendum eu. In ut est placerat ipsum lobortis aliquet id tempus sem.",
      postTags: [
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5",
        "tag6",
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
  );

  return (
    <StyledContainer fluid className="m-0 p-0 pt-5 pb-5 flex-fill d-flex">
      <Row className="mt-5 ml-1 mr-1 ml-lg-5 mr-lg-5 flex-grow-1">
        <Col className="d-flex flex-column">
          <h1 className="text-center">{post.postTitle}</h1>

          <ThemedCard className="flex-grow-1 d-flex flex-column">
            <div className="m-3 h-100 d-flex flex-column">
              <h5 className="m-0">Firdaus Bisma Suryakusuma</h5>
              <h6>{post.postCreatedDate}</h6>
              <hr className="m-1"/>
              <div className="flex-grow-1" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(post.postContent))}} />
              <hr className="mt-2 mr-1 ml-1"/>
              <div className="d-flex">
                <span className="d-inline">
                  <p className="pr-2">tags:</p>
                </span>
                <span className="d-inline">
                  {post.postTags.map(tag => {
                    return(
                      <TagButton tagName={tag} />
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