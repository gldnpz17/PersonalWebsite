import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../components/page-header";
import TagButton from "../components/tag-button";
import ThemedButton from "../components/themed-components/themed-button";
import DateTimeFormatter from "../helpers/date-time-formatter";
import ViewPostPage from "./view-post-page";
import ShadowCard from "../components/shadow-card";

const StyledContainer = styled(Container)`
  background-color: whitesmoke;
`;

export default function BlogPage(props) {
  let match = useRouteMatch();

  const [posts, setPosts] = useState(null);
  
  useEffect(() => {
    readPosts();
  }, []);

  const readPosts = async () => {
    var response = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "content": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      setPosts(await response.json());
    }
  };

  return (
    <Switch>
      <Route path={`${match.path}/:postId`}>
        <ViewPostPage />
      </Route>  

      <Route>
        <StyledContainer fluid className="m-0 p-0 pt-5 pb-5 flex-fill">
          <PageHeader pageTitle="Blog" pageSubtitle="random thoughts" pageDescription="not really a blog to be honest. the plan is to make it sort of like a place to vent out my thoughts in general. might diverge from a blog in the traditional sense in the future 🤷‍♂️. might even post memes here." />
          <Row className="ml-1 ml-lg-5 mr-1 mr-lg-5">
            <Col>
              <Row className="row-cols-1 ml-1 ml-lg-5 mr-1 mr-lg-5">
                {posts?.map(post => {
                  return(
                    <Col className="pb-3">
                      <ShadowCard>
                        <Card.Body>
                          <h5 className="m-0">{post?.title}</h5>
                          <h6 style={{color: "darkslategray"}}>{DateTimeFormatter.parseToDate(post?.publishDate)}</h6>
                          <p>{post?.summary}</p>
                          <div className="d-flex justify-content-end">
                            <ThemedButton className="pt-0 pb-0" href={`${match.path}/${post?.id}`}>
                              read more
                            </ThemedButton>
                          </div>
                          <hr />
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
                        </Card.Body>
                      </ShadowCard>
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