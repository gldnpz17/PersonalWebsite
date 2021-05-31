import { useContext, useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import AuthContext from "../../contexts/auth-context";
import ThemedButton from "../themed-components/themed-button";
import ThemedSecondaryButton from "../themed-components/themed-secondary-button";
import ThemedSvg from "../themed-components/themed-svg";

export default function LoginModal(props) {
  const authInfo = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const resetCredentials = () => {
    setCredentials({
      username: "",
      password: ""
    });
  };

  const login = async (username, password) => {
    var response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    await authInfo.checkAuthStatus();

    if (response.status === 200) {
      handleClose();
      window.location.replace("/admin");
    }
  };

  const handleClose = () => {
    resetCredentials();

    props.onHide();
  };

  return (
    <Modal centered show={props.show} onHide={handleClose}>
      <Modal.Body>
        <div>
          <div>
            <h2 className="text-center">log in</h2>
            <button type="button" className="close" onClick={props.onHide} style={{zIndex: "1", position: "absolute", right: "1rem", top: "1rem"}}>&times;</button>
          </div>
          <hr />
          <div className="p-1">
            <p className="text-center">log in as administrator</p>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <ThemedSvg style={{width: "24px", height:"24px"}}>
                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                  </ThemedSvg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control 
                value={credentials.username} 
                onChange={
                  (e) => {
                    setCredentials(prev => ({
                      ...prev,
                      username: e.target.value
                    }))}} 
                placeholder="username" />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <ThemedSvg style={{width: "24px", height:"24px"}}>
                    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                  </ThemedSvg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control                 
                value={credentials.password} 
                onChange={
                  (e) => {
                    setCredentials(prev => ({
                      ...prev,
                      password: e.target.value
                    }))}} 
                placeholder="password" />
            </InputGroup>
            <Row className="m-0">
              <Col className="p-0 pr-1">
                <ThemedSecondaryButton className="w-100">forgot password?</ThemedSecondaryButton>
              </Col>
              <Col className="p-0 pl-1">
                <ThemedButton className="w-100" onClick={login}>log in</ThemedButton>
              </Col>
            </Row>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}