import React, { Component } from "react";
import { DivWrapper } from "./styles";

export default class CSSExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DivWrapper>
          <span>{`
  color: white;
  border: 2px blue solid;
  background-color: black;
  padding: 10px;
  margin: 20px;
`}</span>
        </DivWrapper>
      </div>
    );
  }
}
