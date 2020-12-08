import React from "react";
import styled from "styled-components";

const StyledSocialLink = styled.a`
  overflow: hidden;

	&:hover > svg {
		transform: translateY(-2px);
    fill: #58a5f0;
	}

  &:active > svg {
    transform: translateY(1px);
    fill: #004c8c;
  }
`;

export default class SocialButton extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
	return (
      <StyledSocialLink href={this.props.href}>
        {this.props.children}
      </StyledSocialLink>
		);
  }
}