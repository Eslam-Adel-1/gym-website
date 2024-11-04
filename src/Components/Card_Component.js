import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card_Component = ({ name, target, gif, bodypart, card_id }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${card_id}`);
  };

  return (
    <MainSection onClick={handleNavigate}>
      <>
        <img alt="gif-image" src={gif} />
        <h1 className="exerciseName">{name}</h1>
        <div className="bodyParts_target">
          <p>{target}</p>
          <p>{bodypart}</p>
        </div>
      </>
    </MainSection>
  );
};

export default Card_Component;

const MainSection = styled.div`
  border: 1.5px solid #fff368;
  border-radius: 15px;
  border-top-left-radius: 50px;
  /* border-top-right-radius: 30px; */
  /* border-bottom-right-radius: 30px; */
  cursor: pointer;
  overflow: hidden;
  transition: all 150ms ease-in;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 260px;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 243, 104, 0.8),
      rgba(0, 0, 0, 0)
    );
    /* background-color: red; */
  }
  &:hover {
    transform: scale(1.05);
  }
  img {
    /* object-fit: contain; */
    background-color: #fff368;
    height: 170px;
    width: 100%;
  }
  .exerciseName {
    font-family: "Courier New", Courier, monospace;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 600;
    margin: 10px;
  }
  .bodyParts_target {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 10px;
    p {
      font-family: "Courier New", Courier, monospace;
      text-transform: capitalize;
      font-weight: 600;
      color: #fff368;
      border: 1px solid #fff368;
      padding: 5px 10px;
      border-radius: 10px;
    }
  }
`;
