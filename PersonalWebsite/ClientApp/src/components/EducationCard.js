import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import ShadowCard from "./shadow-card";

const StyledEducationCard = styled(Card)`
  border-color: #1c313a;
  box-shadow: 2px 2px 1px grey;
`;

class EducationCard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      cardTitle: null,
      cardSubtitle: `${this.props.startYear} - ${this.props.endYear}`,
      cardDescription: this.props.description
    }

    if (props.departmentName !== null){
      this.state.cardtitle = `${this.props.institutionName} | ${this.props.departmentName}`;
    } else {
      this.state.cardtitle = `${this.props.institutionName}`;
    }
  }

  render() {
    return(
      <ShadowCard>
        <Card.Body>
          <h5 className="m-0">{this.state.cardtitle}</h5>
          <h6>{this.state.cardSubtitle}</h6>
          <p>{this.state.cardDescription}</p>
        </Card.Body>
      </ShadowCard>
    )
  }
}

export default EducationCard;