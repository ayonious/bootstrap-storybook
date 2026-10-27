import React, { Component } from "react";
import { ButtonWrapper } from "./styles";

const MyButton = (props) => {
  return (
    <ButtonWrapper>
      <a href={props.toLink}> my button</a>
    </ButtonWrapper>
  );
};

export default MyButton;
