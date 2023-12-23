import React from "react";
import MainPage from "../MainPage/MainPage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import AuthorizationPage from "../AuthorizationPage/AuthorizationPage";
import CreateLocationPage from "../CreateLocationPage/CreateLocationPage";
import InterestingPlacePage from "../InterestingPlacePage/InterestingPlacePage";
import CardPage from "../CardPage/CardPage";

function App() {


  let isAuth = false;

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/place" element={<InterestingPlacePage />} />
          <Route path="/place/:id" element={<CardPage />} />
          <Route path="/create" element={<CreateLocationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer props={isAuth} />
    </div>
  );
}

export default App;
