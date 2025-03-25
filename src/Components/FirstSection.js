import React from "react";
import gym2 from "../Assets/images/gym2-2-2.jpg";
import styled, { css } from "styled-components";

const FirstSection = () => {
  return (
    <MainSection>
      <div className="first"></div>
    </MainSection>
  );
};

export default FirstSection;

const MainSection = styled.div`
  position: relative;
  background-image: url(${gym2});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  @media (max-width: 1400px) {
    background-size: cover;
  }

  h1 {
    ${css`
      @import url("https://fonts.cdnfonts.com/css/outerspace-militia");
      font-family: "Outerspace Militia", sans-serif;
      background-color: rgba(0, 0, 0, 0.7);
      box-sizing: border-box;
      padding: 20px;
      border-radius: 70px 5px 70px 5px;
      font-size: 35px;
      color: whitesmoke;
      text-align: center;
      margin: 0px 170px;
    `}
  }

  &:after {
    position: absolute;
    content: "";
    height: 150px;
    right: 0%;
    left: 0;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 24%,
      rgba(0, 0, 0, 1) 89%
    );
  }
`;
