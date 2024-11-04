import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchData, options } from "../features/fetchData";
import Button from "@mui/material/Button";
import muscle from "../Assets/images/muscle.png";
import equipment from "../Assets/images/equipment.png";
import bodypart from "../Assets/images/bodyPart.png";

const TheExercise = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [opened, setOpened] = useState(false);

  const { id } = useParams();

  //========================================================================

  useEffect(() => {
    const awaitEffect = async () => {
      const response = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        options
      );
      setData(response);
    };
    awaitEffect();
  }, []);

  useEffect(() => {
    const consoleThis = data?.filter((item) => item.id === id);
    setFilteredData(consoleThis);
  }, [data]);

  //========================================================================

  return (
    <MainSection>
      {filteredData?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {opened ? (
              <div className="instructions">
                <div className="container_instruction">
                  {item.instructions?.map((item, index) => {
                    return (
                      <p key={index}>
                        <span>{index + 1} - </span>
                        {item}
                      </p>
                    );
                  })}
                </div>
                <Button
                  variant="contained"
                  className="button-trail"
                  onClick={() => setOpened(!opened)}
                >
                  Close Instructions
                </Button>
              </div>
            ) : (
              <div></div>
            )}
            <div className="TheExercise">
              <div className="TheExercise_Text">
                <h1>{item.name}</h1>
                <div className="ExerciseIcons">
                  <div className="equipment">
                    <img alt="equipment" src={equipment} />
                    <p>{item.equipment}</p>
                  </div>
                  <div className="target">
                    <img alt="muscle" src={muscle} />

                    <p>{item.target}</p>
                  </div>
                  <div className="bodyPart">
                    <img alt="bodypart" src={bodypart} />

                    <p>{item.bodyPart}</p>
                  </div>
                  <div className="div_button">
                    <Button
                      variant="contained"
                      className="button-trail"
                      onClick={() => setOpened(!opened)}
                    >
                      Click For instructions
                    </Button>
                  </div>
                </div>
              </div>
              <img alt="gif-image" src={item.gifUrl} />
            </div>
          </React.Fragment>
        );
      })}
    </MainSection>
  );
};

export default TheExercise;

const MainSection = styled.div`
  height: 100%;
  width: 100vw;
  margin-top: 120px;
  position: relative;
  .instructions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.8);
    z-index: 1000;
    .button-trail {
      font-size: 15px;
      font-weight: 600;
      font-family: "Francois One", sans-serif;
      /* font-family: "Protest Revolution", sans-serif; */
      background-color: #fff368;
      color: black;
      border-radius: 30px;
      margin-top: 20px;
    }
    .container_instruction {
      p {
        /* text-align: center; */
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        font-size: 15px;
        font-weight: 800;
        margin-bottom: 7px;
      }
    }
  }
  .TheExercise {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    padding: 55px;
    margin: 30px;
    border: 2px solid #fff386;
    border-radius: 15px;
    img {
      height: 400px;
      border-radius: 15px;
    }
    .TheExercise_Text {
      margin-right: 70px;
      h1 {
        color: aliceblue;
        text-transform: capitalize;
        font-family: "Courier New", Courier, monospace;
        margin-bottom: 30px;
      }
      .div_button {
        display: flex;
        align-items: center;
        justify-content: center;
        .button-trail {
          font-size: 15px;
          font-weight: 600;
          font-family: "Francois One", sans-serif;
          /* font-family: "Protest Revolution", sans-serif; */
          background-color: #fff368;
          color: black;
          border-radius: 30px;
        }
      }
      .ExerciseIcons {
        .target,
        .equipment,
        .bodyPart {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
          p {
            font-size: 28px;
            text-transform: capitalize;
          }

          img {
            filter: invert(100%);
            object-fit: contain;
            height: 40px;
            border: 1.5px solid #000c79;
            padding: 15px;
          }
        }
      }
    }
  }
  p {
    color: whitesmoke;
  }
`;
