import React, { useState, useEffect } from "react";
import MapComponent from "../MapComponent/MapComponent";
import PlacesFiel from "../PlacesFiel/PlacesFiel";
import TopRatedPlaces from "../TopRatedPlaces/TopRatedPlaces";
import styled from "styled-components";
import axios from "../../utils/axios";

const AppWraper = styled.div`
  width: 100%;
`;

const MainPage = () => {


  const [dots ,setDots] = useState([])


  useEffect(() => {

    // Получаем все точки
    axios
      .get("/dots", {})
      .then((response) => {
        setDots(response)
      })
      .catch((err) => {console.error(err)})

  }, [dots]);

  return (
    <AppWraper>
      <MapComponent props={dots}/>
      <PlacesFiel />
      <TopRatedPlaces />
    </AppWraper>
  );
};

export default MainPage;
