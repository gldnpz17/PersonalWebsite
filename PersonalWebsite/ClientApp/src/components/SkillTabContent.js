import React from "react";
import { CardDeck, Col, Row } from "react-bootstrap";
import "styled-components";
import SkillCard from "./SkillCard";

class SkillTabContent extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      skills: props.skills
    };
  }

  render() {
    return (
      <Row className="row-cols-1 row-cols-lg-3 overflow-auto" style={{minHeight:"35rem", maxHeight:"35rem"}}>
        {
          this.state.skills.map((skill) => {
            return (
              <Col className="p-1">
                <SkillCard skill={skill} />
              </Col>
            );
          })
        }
      </Row>
    );
  }
}

export default SkillTabContent;