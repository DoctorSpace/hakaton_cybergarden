import React, { useState, useEffect } from "react";
import MapComponent from "../MapComponent/MapComponent";
import PlacesFiel from "../PlacesFiel/PlacesFiel";
import TopRatedPlaces from "../TopRatedPlaces/TopRatedPlaces";
import styled from "styled-components";
import axios from "../../utils/axios";

import {NewDate }from "../../date/cheak"

const AppWraper = styled.div`
  width: 100%;
`;

const MainPage = () => {

  // console.log(NewDate);

  const [cityDate ,setCityDate] = useState(NewDate)

  useEffect(() => {
    // Получаем 3-и массива [точки], [картинки города], [топ 5]
    axios
      .get("city_data/?sityName=Taganrog", {})
      .then((response) => {

        setCityDate(response.data)
      })
      .catch((err) => {console.error(err)})
  }, []);

  return (
    <AppWraper>
      <MapComponent sityInfo={cityDate?.name.sity_info} placemarks={cityDate?.name.placemarks}/>
      <PlacesFiel props={cityDate.name.pictures}/>
      <TopRatedPlaces props={cityDate.name.pop_places}/>
    </AppWraper>
  );
};

export default MainPage;
