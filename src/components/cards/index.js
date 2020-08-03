import React, { Component } from "react";
import { CardArticleWrapper, CardImageWrapper, InfoDivWrapper } from "./styles";

const Card = () => {
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
};

export default Card;
