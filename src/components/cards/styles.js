import styled from "styled-components";

export const CardArticleWrapper = styled.article`
  background: grey;
  border: solid black;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 350px;
  }
`;

export const CardImageWrapper = styled.div`
  align-self: center;
  @media only screen and (min-width: 768px) {
    img {
      height: 350px;
      width: 350px;
    }
  }
  @media only screen and (max-width: 768px) {
    img {
      max-width: 100%;
    }
  }
`;

export const InfoDivWrapper = styled.div`
  height: 350px;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  div {
    h2 {
      font-size: 30px;
      text-transform: capitalize;
      margin-bottom: 10px;
    }
    h6 {
      color: black;
      text-transform: capitalize;
    }
    p {
      padding: 20px 0 30px 0;
      text-align: left;
    }
  }
`;
