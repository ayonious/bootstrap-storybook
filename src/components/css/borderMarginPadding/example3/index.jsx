import React, { Component } from "react";
import { DivWrapper } from "./styles";

export default class CSSExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DivWrapper>
        <span>{`
  color: red;
  border: 2px blue solid;
`}</span>
      </DivWrapper>
    );
  }
}
