import React from "react";
import styled, { css } from "styled-components";

const Square = ({ thisImage, text }) => {
  return (
    <MainSection gymOffer={thisImage}>
      <div className="grid-item">
        <h1>{text}</h1>
      </div>
    </MainSection>
  );
};

export default Square;

const MainSection = styled.div`
  color: transparent;
  border: 2px solid #fff368;
  border-radius: 15px;
  cursor: pointer;
  height: 15rem;
  background: linear-gradient(
      180deg,
      rgba(255, 243, 104, 0.5),
      rgba(0, 0, 0, 0.7)
    ),
    ${(props) => css`url(${props.gymOffer})`};
  background-size: cover;
  transition: all 100ms ease-in;
  @media (min-width: 1300px) {
    height: 20rem;
  }
  &:hover {
    scale: 1.05;
  }
  .grid-item {
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
    h1 {
      font-size: 37px;
      text-align: center;
      -webkit-text-stroke: 0.5px whitesmoke;
      padding: 10px;
      @import url("https://fonts.cdnfonts.com/css/new-amsterdam");
      font-family: "New Amsterdam", sans-serif;
    }
  }
`;
