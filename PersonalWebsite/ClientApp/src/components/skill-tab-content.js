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
      <div style={{height:"35rem", overflow: "auto"}}>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 m-0">
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
      </div>
    );
  }
}

export default SkillTabContent;