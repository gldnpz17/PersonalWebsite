import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import WritePostModal from "../components/modals/write-post-modal";
import PrimaryThemedFlatCard from "../components/themed-components/primary-themed-flat-card";
import ThemedButton from "../components/themed-components/themed-button";
import ThemedSecondaryButton from "../components/themed-components/themed-secondary-button";

export default function AdminBlogPage(props) {
  const [posts, setPosts] = useState(null);
  const [showWritePost, setShowWritePost] = useState(false);

  useEffect(() => {
    readPosts();
  }, []);

  const readPosts = async () => {
    var response = await fetch("/api/posts", {
      method: "GET",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (response.status === 200) {
      setPosts(await response.json());
    }
  }

  const deletePost = async (postId) => {
    await fetch(`/api/posts/${postId}`, {
      method: "DELETE"
    });

    await readPosts();
  }
  
  const openWritePost = () => {
    setShowWritePost(true);
  }

  const closeWritePost = async () => {
    setShowWritePost(false);

    await readPosts();
  }

  const EditPosts = () => {
    if (posts === null || posts.length === 0) {
      return (<h3 style={{color: "darkgray"}} className="text-center">no data to display</h3>);
    } else {
      return (
        <Row className="w-100 row-cols-1 row-cols-md-2 row-cols-xl-3 m-0">
          {posts.map(post => {
            return (
              <Col className="p-0">
                <PrimaryThemedFlatCard className="m-1">
                  <Card.Body>
                    <p className="m-0"><b>{"id: "}</b>{post.id}</p>
                    <p className="m-0"><b>{"title: "}</b>{post.title}</p>
                    <p><b>{"summary: "}</b>{post.summary}</p>
                    <ThemedSecondaryButton className="w-100" onClick={() => {deletePost(post.id)}}>delete</ThemedSecondaryButton>
                  </Card.Body>
                </PrimaryThemedFlatCard>
              </Col>
            )})
          }
        </Row>
      )
    }
  }

  return (
    <Container fluid className="m-0 p-0 pt-5 pb-5" style={{backgroundColor: "whitesmoke"}}>
      <h2 className="text-center">Posts</h2>
      <div className="d-flex">
        <ThemedButton onClick={openWritePost} className="m-2 mr-lg-5 ml-lg-5 flex-grow-1">write new</ThemedButton>
      </div>
      <div className="mr-2 ml-2 mr-lg-5 ml-lg-5 mb-4">
        <EditPosts />
      </div>

      <WritePostModal show={showWritePost} onHide={closeWritePost} />
    </Container>
  );
}