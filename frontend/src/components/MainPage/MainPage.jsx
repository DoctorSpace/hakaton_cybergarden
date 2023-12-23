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


  const [cityDate ,setCityDate] = useState("")


  fetch('https://b8nv7t4w-8000.euw.devtunnels.ms/city_data/?sityName=Taganrog', {mode: 'no-cors'})

  useEffect(() => {
    // Получаем 3-и массива [точки], [картинки города], [топ 5]
    axios
      .get("city_data/?sityName=Taganrog", {})
      .then((response) => {

        console.log(response);
        //setCityDate(response)
      })
      .catch((err) => {console.error(err)})
  }, [cityDate]);

  return (
    <AppWraper>
      <MapComponent props={cityDate}/>
      <PlacesFiel props={cityDate}/>
      <TopRatedPlaces props={cityDate}/>
    </AppWraper>
  );
};

export default MainPage;
