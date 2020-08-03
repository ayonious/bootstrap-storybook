import React, { Component } from "react";
import { CardArticleWrapper, CardImageWrapper, InfoDivWrapper } from "./styles";

interface Props {
  img: any;
  title: string;
  excerpt: string;
}

const Card = (props: Props) => {
  return (
    <CardArticleWrapper>
      <CardImageWrapper>
        <img src={props.img} />
      </CardImageWrapper>
      <InfoDivWrapper>
        <div>
          <h2>{props.title}</h2>
          <h6>
            <span> by Ayon </span>
          </h6>
          <p>{props.excerpt}</p>
        </div>
      </InfoDivWrapper>
    </CardArticleWrapper>
  );
};

export default Card;
