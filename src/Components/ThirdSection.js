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
  width: 100vw;
  height: 100vh;
  background-image: url(${smoke2});
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  place-content: center;
  margin-top: 30px;
  .first {
    margin-bottom: 50px;
    margin-top: 70px;
    h1 {
      text-align: center;
      font-size: 30px;
      @import url("https://fonts.cdnfonts.com/css/outerspace-militia");
      font-family: "Outerspace Militia", sans-serif;
      color: whitesmoke;
    }
  }
  .second {
    display: grid;
    grid-template-columns: repeat(4, 215px);
    grid-template-rows: 200px;
    gap: 15px;
    place-content: center;
  }
`;
