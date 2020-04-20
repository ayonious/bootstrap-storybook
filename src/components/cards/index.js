import React, { Component } from "react";
import { CardArticleWrapper, CardImageWrapper, InfoDivWrapper } from "./styles";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardArticleWrapper>
        <CardImageWrapper>
          <img src={this.props.img} />
        </CardImageWrapper>
        <InfoDivWrapper>
          <div>
            <h2>{this.props.title}</h2>
            <h6>
              <span> by Ayon </span>
            </h6>
            <p>{this.props.excerpt}</p>
          </div>
        </InfoDivWrapper>
      </CardArticleWrapper>
    );
  }
}
