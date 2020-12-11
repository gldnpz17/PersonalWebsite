import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import TagButton from "../components/TagButton";
import ThemedButton from "../components/ThemedComponents/ThemedButton";
import ThemedCard from "../components/ThemedComponents/ThemedCard";
import ViewPostPage from "./ViewPostPage";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function BlogPage(props) {
  let match = useRouteMatch();

  const [posts, setPosts] = useState(
    [
      {
        postId: 0,
        postTitle: "Post1",
        postCreatedDate: "0 January 2020",
        postPreview: "lorem ipsum",
        postTags: [
          "tag1",
          "tag2",
          "tag3"
        ]
      },
      {
        postId: 1,
        postTitle: "Post2",
        postCreatedDate: "30 February 2020",
        postPreview: "lorem ipsum dolor",
        postTags: [
          "tag4",
          "tag5",
          "tag6"
        ]
      },
      {
        postId: 2,
        postTitle: "Post3",
        postCreatedDate: "42 December 2020",
        postPreview: "lorem ipsum dolor sit amet",
        postTags: [
          "tag7",
          "tag8",
          "tag9"
        ]
      }
    ]
  );

  return (
    <Switch>
      <Route path={`${match.path}/:postId`}>
        <ViewPostPage />
      </Route>  

      <Route>
        <StyledContainer fluid className="m-0 p-0 pt-5 pb-5">
          <PageHeader pageTitle="Blog" pageSubtitle="it's all shitposts" pageDescription="nobody reads these" />
          <Row className="ml-1 ml-lg-5 mr-1 mr-lg-5">
            <Col>
              <Row className="row-cols-1 ml-1 ml-lg-5 mr-1 mr-lg-5">
                {posts.map(post => {
                  return(
                    <Col className="pb-3">
                      <ThemedCard>
                        <Card.Body>
                          <h5 className="m-0">{post.postTitle}</h5>
                          <h6 style={{color: "darkslategray"}}>{post.postCreatedDate}</h6>
                          <p>{post.postPreview}</p>
                          <div className="d-flex justify-content-end">
                            <ThemedButton className="pt-0 pb-0" href={`${match.path}/${post.postId}`}>
                              read more
                            </ThemedButton>
                          </div>
                          <hr />
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