import React from "react";
import styled from "styled-components";
import Sharks from "../Assets/images/Sharks-gym.png";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const LoadingScreen = () => {
  return (
    <MainSection>
      <div className="container1">
        <img alt="SharksLogo" src={Sharks} />

        <h1>
          Sharks
          <br /> Gym
        </h1>
      </div>
      <div className="container2">
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    </MainSection>
  );
};

export default LoadingScreen;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: grid;
  place-content: center;
  .container1 {
    display: flex;
    align-items: center;
    gap: 25px;
  }
  .container2 {
    margin-top: 15px;
    margin-right: 20px;
    margin-left: 90px;
    .MuiLinearProgress-bar {
      background-color: #fff398;
      border-radius: 30px;
    }
    .MuiLinearProgress-root {
      background-color: grey;
      border-radius: 30px;
      margin-top: 10px;
    }
  }
  img {
    object-fit: contain;
    height: 100px;
  }
  h1 {
    font-family: "Outerspace Militia", sans-serif;
    color: whitesmoke;
    font-weight: 100;
    overflow: hidden;
    border-right: 2px solid whitesmoke;
    padding-right: 10px;
    white-space: nowrap;
    animation: typing 5s forwards;
    font-size: 1.6rem;
    width: 0;
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
`;
