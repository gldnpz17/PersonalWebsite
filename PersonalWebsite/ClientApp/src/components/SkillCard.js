import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSkillCard = styled(Card)`
  border-color: #1c313a;
  border-width: 1px;
`;

const StyledProgressBar = styled(ProgressBar)`
  & > .progress-bar {
    background-color: #0277bd;
  }
`

class SkillCard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      skill: props.skill.name,
      percentage: props.skill.percentage,
      description: props.skill.description
    }
  }

  render() {
    return(
      <StyledSkillCard className="h-100">
          <Card.Body>
            <div className="d-flex">
              <h5 className="d-inline flex-grow-1">{this.state.skill}</h5>
              <h5 className="d-inline align-self-end">{`${this.state.percentage}%`}</h5>
            </div>
            <StyledProgressBar now={this.state.percentage}/>
            <p className="text-justify">{this.state.description}</p>
          </Card.Body>
      </StyledSkillCard>
    );
  }
}

export default SkillCard;