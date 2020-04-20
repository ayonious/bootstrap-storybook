import styled from "styled-components";

export const CardArticleWrapper = styled.article`
  margin-bottom: 2rem;
  background: brown;
  padding: 1rem;
  text-align: center;
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 350px 1fr;
  }
`;

export const CardImageWrapper = styled.div`
  div {
    @media only screen and (min-width: 768px) {
      height: 300px;
    }
  }
`;

export const InfoDivWrapper = styled.div`
  height: 300px;
  padding: 1rem 0;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }
  div {
    h2 {
      font-size: 30px;
      text-transform: capitalize;
      margin-bottom: 10px;
    }
    h6 {
      color: grey;
      text-transform: capitalize;
    }
    p {
      padding: 20px 0 30px 0;
      text-align: left;
    }
  }
`;
