import React from "react";
import { useState, useEffect, useRef } from "react";
import Sharks from "../Assets/images/Sharks-gym.png";
import Button from "@mui/material/Button";
import unstoppable from "../Assets/sounds/Unstoppable.mp3";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [song, setSong] = useState(new Audio(unstoppable));
  const [songPlayed, setSongPlayed] = useState(false);
  const [overScroll, setOverScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 35) {
        setOverScroll(true);
      } else setOverScroll(false);
    };
  }, []);

  const playSong = () => {
    if (songPlayed) {
      song.pause();
      setSongPlayed(!songPlayed);
    } else {
      song.play();
      song.loop = true;
      setSongPlayed(!songPlayed);
    }
  };

  return (
    <MainSection sccroll={overScroll}>
      <LeftPart>
        <div
          className="first"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={Sharks} />
          <h1>
            Sharks <h1>Gym</h1>
          </h1>
        </div>
      </LeftPart>
      <RightPart>
        <div className="second">
          <ul>
            {/* <li onClick={playSong}>
              {songPlayed ? (
                <VolumeUpIcon className="volumeIIcon" />
              ) : (
                <VolumeOffIcon className="volumeIcon" />
              )}
            </li> */}
            <li
              onClick={() => {
                navigate("exercise");
              }}
            >
              Exercises
            </li>
            <li>Membership</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <Button variant="contained" className="button-trail">
            Start 7 day free trial
          </Button>
        </div>
      </RightPart>
    </MainSection>
  );
};

export default Navbar;

const MainSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 25px 10px 25px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: ${(props) => (props.sccroll ? "rgba(0,0,0,0.9)" : "")};
  -webkit-box-shadow: ${(props) =>
    props.sccroll ? "0px 5px 5px 0px rgba(0, 0, 0, 0.9)" : ""};
  -moz-box-shadow: ${(props) =>
    props.sccroll ? "0px 5px 5px 0px rgba(0, 0, 0, 0.9)" : ""};
  box-shadow: ${(props) =>
    props.sccroll ? "0px 5px 5px 0px rgba(0, 0, 0, 0.9)" : ""};

  transition: all 50ms ease-in-out;

  /* filter: blur(10px); */
`;

//===================================================================

const LeftPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .first {
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    h1 {
      font-size: 22px;
      /* font-weight: 900; */
      /* font-family: "Trixie Regular", sans-serif; */
      /* @import url("https://fonts.cdnfonts.com/css/trixie-2"); */

      @import url("https://fonts.cdnfonts.com/css/outerspace-militia");
      font-family: "Outerspace Militia", sans-serif;

      color: whitesmoke;
      margin-bottom: 5px;
    }
    img {
      object-fit: contain;
      height: 60px;
    }
  }
`;

//===================================================================

const RightPart = styled.div`
  .second {
    display: flex;
    align-items: center;
    .button-trail {
      font-size: 11px;
      font-weight: 600;
      font-family: "Francois One", sans-serif;
      /* font-family: "Protest Revolution", sans-serif; */
      background-color: #fff368;
      color: black;
      border-radius: 30px;
    }
    ul {
      display: flex;
      align-items: center;
      color: whitesmoke;
      li {
        position: relative;
        font-size: 17px;
        font-family: "Francois One", sans-serif;
        list-style-type: none;
        margin-right: 35px;
        padding-bottom: 2px;
        cursor: pointer;

        &:after {
          content: "";
          position: absolute;
          height: 2px;
          width: 0%;
          bottom: 0;
          right: 0;
          left: 0;
          background-color: whitesmoke;
          animation: fill 1s forwards;
          transition: all 0.5s;
        }
        &:hover:after {
          width: 100%;
        }
        .volumeIIcon {
          margin-top: 6px;
        }
        .volumeIcon {
          margin-top: 6px;
          opacity: 0.5;
        }
      }
    }
  }
`;

//===================================================================
