import React from "react";
import Square from "./Square";
import smoke from "../Assets/images/Smoke1.png";
import smoke2 from "../Assets/images/Smoke2.png";
import gymOffer from "../Assets/images/gymOffer.jpg";
import gymOffer2 from "../Assets/images/gymOffer2.jpg";
import gymOffer3 from "../Assets/images/gymOffer3.jpg";
import gymOffer4 from "../Assets/images/gymOffer4.jpg";
import styled from "styled-components";

const ThirdSection = () => {
  return (
    <MainSection smoke={smoke}>
      <div className="first">
        <h1>We offer something for everybody</h1>
      </div>
      <div className="second">
        <Square thisImage={gymOffer4} text="Sharks Group Classes" />
        <Square thisImage={gymOffer2} text="Strength Training" />
        <Square thisImage={gymOffer3} text="Personal Training" />
        <Square thisImage={gymOffer} text="Member Only Events" />
      </div>
    </MainSection>
  );
};

export default ThirdSection;

const MainSection = styled.div`
  background-image: url(${smoke2});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  @media (min-width: 1250px) {
    padding: 0px;
  }
  @media (max-width: 800px) {
    height: fit-content;
    padding-bottom: 200px;
  }
  .first {
    margin-bottom: 50px;
    margin-top: 50px;
    h1 {
      text-align: center;
      font-size: 2rem;
      @import url("https://fonts.cdnfonts.com/css/outerspace-militia");
      font-family: "Outerspace Militia", sans-serif;
      color: whitesmoke;
      @media (min-width: 1000px) {
        font-size: 2.2rem;
      }
      @media (max-width: 800px) {
      }
    }
  }
  .second {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 15px;
    padding: 0px 5rem;
    place-content: center;
  }
`;
