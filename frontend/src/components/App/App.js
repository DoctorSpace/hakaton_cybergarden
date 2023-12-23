import React from "react";
import MainPage from "../MainPage/MainPage";
import Header from "../Header/Header";
import PlacesFiel from "../PlacesFiel/PlacesFiel";
import TopRatedPlaces from "../TopRatedPlaces/TopRatedPlaces";
import Footer from "../Footer/Footer";


function App() {
  return <div className="App">
    <Header>
      <p>Куда?</p>
      <button>Нажать</button>
    </Header>
    <MainPage />
    <PlacesFiel />
    <TopRatedPlaces />
    <Footer />
  </div>;
}

export default App;
