import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  });

  return (
    <MainSection>
      <h1>Page Not Found</h1>
    </MainSection>
  );
};

export default NotFound;

const MainSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;
  h1 {
    color: rgba(255, 243, 104, 1);
    @import url("https://fonts.cdnfonts.com/css/outerspace-militia");
    font-family: "Outerspace Militia", sans-serif;
  }
`;
