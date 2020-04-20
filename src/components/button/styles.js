import styled from "styled-components";

export const ButtonWrapper = styled.div`
  a {
    border: 1px solid black;
    padding: 4px 8px;
    display: inline-block;
    color: black;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    margin-bottom: 2rem;
    :hover {
      background: black;
      color: white;
    }
  }
`;
