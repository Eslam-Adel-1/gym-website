import React, { useEffect, useState } from "react";
import { fetchData, options } from "../features/fetchData";
import styled from "styled-components";
import Card_Component from "./Card_Component";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  dataWithDuplicates,
  filteringFunction,
  searchFiltering,
} from "../utils/ReuseableFunctions.js";

//===========================================================

const ExercisePage = () => {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [slicedData, setSlicedData] = useState([]);
  const [bodyPartsData, setBodyPartsData] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);

  //===========================================================
  // Functions

  const filter = (gymData) => {
    const data = filteringFunction(gymData, dataWithDuplicates);
    setBodyPartsData(data.bodyPartsData);
    setEquipmentData(data.equipmentData);
    setTargetData(data.targetData);
  };

  // ------------------------
  const handleSearch = (parameter) => {
    const searchData = searchFiltering(data, searchInput, parameter);
    setFilteredData(searchData);
    setSearchInput("");
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  //===========================================================
  // useEffects

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchExerciseData = async () => {
      const response = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
        options
      );
      setData(response);
      filter(response);
    };
    fetchExerciseData();

    return () => {
      setData([]);
    };
  }, []);

  // ---------------------

  useEffect(() => {
    if (filteredData.length > 0) {
      const length = page * 12;
      const firstIndex = length - 12;
      const lastIndex = length;
      const pageData = filteredData.slice(firstIndex, lastIndex);
      setSlicedData(pageData);
    }

    return () => {
      setSlicedData([]);
    };
  }, [page, filteredData]);

  //===========================================================

  return (
    <MainSection>
      <h1
        onClick={() => {
          console.log(data);
          console.log(filteredData);
        }}
      >
        Exercise Page
      </h1>
      <div className="div_searchField">
        <div className="searchField">
          <input
            type="text"
            placeholder="What Do You Look For ?"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <Button
            variant="contained"
            className="button-trail"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
      <div className="categories">
        <h1>Body Part</h1>
        <ul>
          {bodyPartsData?.map((item, index) => {
            return (
              <li key={index} onClick={() => handleSearch(item)}>
                {item}
              </li>
            );
          })}
        </ul>
        <h1>Target</h1>
        <ul>
          {targetData?.map((item, index) => {
            return (
              <li key={index} onClick={() => handleSearch(item)}>
                {item}
              </li>
            );
          })}
        </ul>
        <h1>Equipment</h1>
        <ul>
          {equipmentData?.map((item, index) => {
            return (
              <li key={index} onClick={() => handleSearch(item)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {filteredData?.length !== 0 && (
          <>
            <div className="exercise_container">
              {slicedData?.map((item, index) => {
                return (
                  <Card_Component
                    key={index}
                    card_id={item.id}
                    name={item.name}
                    target={item.target}
                    bodypart={item.bodyPart}
                    gif={item.gifUrl}
                  />
                );
              })}
            </div>
            <Stack spacing={2}>
              <Pagination
                className="pagination"
                count={Math.ceil(filteredData?.length / 12)}
                page={page}
                siblingCount={0}
                color="primary"
                onChange={handlePageChange}
              />
            </Stack>
          </>
        )}
      </div>
    </MainSection>
  );
};

export default ExercisePage;

//===========================================================

const MainSection = styled.div`
  height: 100%;
  width: 100vw;
  margin-top: 100px;
  /* padding: 10px; */
  .categories {
    h1 {
      margin-bottom: 30px;
      margin-top: 30px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      margin-bottom: 25px;
      padding-bottom: 30px;
      border-bottom: 2px solid whitesmoke;
      cursor: pointer;
      li {
        width: fit-content;
        padding: 14px;
        color: #fff368;
        list-style-type: none;
        font-family: Arial, Helvetica, sans-serif;
        text-transform: capitalize;
        border: 1px solid #fff368;
        font-weight: 800;
        border-radius: 10px;
        transition: all 250ms ease-in-out;
        &:hover {
          border: 1px solid black;
          color: black;
          background-color: #fff368;
        }
      }
    }
  }
  .searchForExercise {
    margin-bottom: calc(100vh - 50vh);
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding: 30px;
    font-family: sans-serif;
    color: rgba(255, 243, 104, 0.5);
  }
  .pagination {
    display: grid;
    place-content: center;
    margin-bottom: 35px;
  }
  .MuiButtonBase-root {
    color: whitesmoke !important;
  }
  .MuiSvgIcon-root {
    color: whitesmoke !important;
  }
  .MuiPaginationItem-root {
    color: whitesmoke !important;
  }

  h1 {
    text-align: center;
    color: #fff368;
    font-family: "Outerspace Militia", sans-serif;
    margin-bottom: 20px;
    font-weight: lighter;
  }
  .exercise_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 0px 50px;
    margin-bottom: 15px;
  }
  .div_searchField {
    display: flex;
    align-items: center;
    justify-content: center;
    .searchField {
      margin-bottom: 30px;
      margin-top: 30px;
      border: 2px solid #fff368;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      width: fit-content;
      overflow: hidden;
      padding: 15px;
      input {
        width: 300px;
        height: 28px;
        margin: 0px;
        padding: 0px;
        background: transparent;
        border: none;
        padding: 0px 15px;
        color: #fff368;
        outline: none;
        font-size: 18px;
        &:placeholder {
          color: #fff368;
        }
      }
      .button-trail {
        color: black !important;
        font-size: 15px;
        font-weight: 600;
        font-family: "Francois One", sans-serif;
        background-color: #fff368;
        border-radius: 5px;
      }
    }
  }
`;
