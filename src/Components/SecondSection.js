import React from "react";
import { useState, useRef, useEffect } from "react";
import gym1 from "../Assets/images/ggyymm1.png";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const [intersecting, setIntersecting] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIntersecting(entries[0].isIntersecting);
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <MainSection intersect={intersecting ? 1 : 0}>
      <div className="main-container" ref={sectionRef}>
        <div className="container">
          <h4>Crush your health and fitness goals in no time</h4>
          <Button
            variant="contained"
            className="button-trail"
            onClick={() => {
              navigate("exercise");
            }}
          >
            Show Exercises
          </Button>
        </div>
        <img src={gym1} alt="Gym" />
      </div>
    </MainSection>
  );
};

export default SecondSection;

const MainSection = styled.div`
  width: 100vw;
  height: 100vh;

  .main-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .container {
    flex: 0.6;
    color: whitesmoke;
    @import url("https://fonts.cdnfonts.com/css/outerspace-militia");
    font-family: "Outerspace Militia", sans-serif;
    margin-left: 35px;
    font-size: 30px;
    text-align: center;
    opacity: ${(props) => (props.intersect ? 1 : 0)};
    transition: all 900ms ease-in;
    .button-trail {
      font-size: 15px;
      font-weight: 100;
      font-family: "Francois One", sans-serif;
      background-color: #fff368;
      color: black;
      border-radius: 30px;
      margin-top: 30px;
    }
  }
  img {
    margin-right: 40px;
    flex: 0.4;
    object-fit: contain;
    height: 500px;
    opacity: ${(props) => (props.intersect ? 1 : 0)};
    transition: all 900ms ease-in;
  }
`;
