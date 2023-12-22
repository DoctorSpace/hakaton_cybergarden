import React from "react";
import MapComponent from "../MapComponent/MapComponent";
import styled from "styled-components";

const AppWraper = styled.div`
  width: 100%;
`;

const MainPage = () => {

  return (
    <AppWraper>
        <MapComponent />
    </AppWraper>
  );
};

export default MainPage;
