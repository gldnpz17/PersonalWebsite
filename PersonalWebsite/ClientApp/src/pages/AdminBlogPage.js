import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import WritePostModal from "../components/modals/WritePostModal";
import PrimaryThemedFlatCard from "../components/ThemedComponents/PrimaryThemedFlatCard";
import ThemedButton from "../components/ThemedComponents/ThemedButton";
import ThemedSecondaryButton from "../components/ThemedComponents/ThemedSecondaryButton";

export default function AdminBlogPage(props) {
  const loadPosts = () => {
    return (
      [
        {
          id: "id1",
          title: "post1",
          summary: "post1summary",
          publishDate: "2020-12-11T22:51:28.522Z",
          gfmContent: "post1content",
          tags: [
            {
              name: "tag1"
            },
            {
              name: "tag2"
            }
          ]
        },
        {
          id: "id2",
          title: "post2",
          summary: "post2summary",
          publishDate: "2020-12-11T22:51:28.522Z",
          gfmContent: "post2content",
          tags: [
            {
              name: "tag2"
            },
            {
              name: "tag3"
            }
          ]
        },
        {
          id: "id3",
          title: "post3",
          summary: "post3summary",
          publishDate: "2020-12-11T22:51:28.522Z",
          gfmContent: "post3content",
          tags: [
            {
              name: "tag1"
            },
            {
              name: "tag3"
            }
          ]
        }
      ]
    );
  };

  const openWritePost = () => {
    setShowWritePost(true);
  }

  const closeWritePost = () => {
    setShowWritePost(false);
  }

  const [posts, setPosts] = useState(loadPosts());
  const [showWritePost, setShowWritePost] = useState(false);

  return (
    <Container fluid className="m-0 p-0 pt-5 pb-5" style={{backgroundColor: "whitesmoke"}}>
      <h2 className="text-center">Posts</h2>
      <div className="d-flex">
        <ThemedButton onClick={openWritePost} className="m-2 mr-lg-5 ml-lg-5 flex-grow-1">write new</ThemedButton>
      </div>
      <div className="mr-2 ml-2 mr-lg-5 ml-lg-5 mb-4">
        <Row className="w-100 row-cols-1 row-cols-md-2 row-cols-xl-3 m-0">
          {posts.map(post => {
            return (
              <Col className="p-0">
                <PrimaryThemedFlatCard className="m-1">
                  <Card.Body>
                    <p className="m-0"><b>{"title: "}</b>{post.title}</p>
                    <p><b>{"summary: "}</b>{post.summary}</p>
                    <ThemedSecondaryButton className="w-100">delete</ThemedSecondaryButton>
                  </Card.Body>
                </PrimaryThemedFlatCard>
              </Col>
            );
          })}
        </Row>
      </div>

      <WritePostModal show={showWritePost} onHide={closeWritePost} />
    </Container>
  );
}