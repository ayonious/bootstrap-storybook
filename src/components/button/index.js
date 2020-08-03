import React, { Component } from "react";
import { ButtonWrapper } from "./styles";

interface Props {
  toLink: string;
}

const MyButton = (props: Props) => {
  return (
    <ButtonWrapper>
      <a href={props.toLink}> my button</a>
    </ButtonWrapper>
  );
};

export default MyButton;
