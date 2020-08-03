import React, { Component } from "react";
import { ButtonWrapper } from "./styles";

const MyButton = () => {
  return (
    <ButtonWrapper>
      <a href={this.props.toLink}> my button</a>
    </ButtonWrapper>
  );
};

export default MyButton;
