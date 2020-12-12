import { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import ThemedButton from "../ThemedComponents/ThemedButton";
import ThemedSecondaryButton from "../ThemedComponents/ThemedSecondaryButton";
import ThemedSvg from "../ThemedComponents/ThemedSvg";

export default function LoginModal(props) {
  return (
    <Modal centered show={props.show} onHide={props.onHide}>
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
              <FormControl placeholder="username" />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <ThemedSvg style={{width: "24px", height:"24px"}}>
                    <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
                  </ThemedSvg>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="password" />
            </InputGroup>
            <Row className="m-0">
              <Col className="p-0 pr-1">
                <ThemedSecondaryButton className="w-100">forgot password?</ThemedSecondaryButton>
              </Col>
              <Col className="p-0 pl-1">
                <ThemedButton className="w-100">log in</ThemedButton>
              </Col>
            </Row>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}