import React, { Component } from "react";
import { ButtonWrapper } from "./styles";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonWrapper>
        <a href={this.props.toLink}> my button</a>
      </ButtonWrapper>
    );
  }
}
