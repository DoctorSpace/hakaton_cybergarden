import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import styled from "styled-components";
import heardActiv from "../../images/heardActiv.svg";
import heard from "../../images/heard.svg";


const ContainerPlace = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
`;

const HeaderPlace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderPlaceTitel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;

  background-color: #2f31405b;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Title = styled.h3`
  font-size: 18px;
  max-width: 65vw;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 50vw;
  }
`;
const Text = styled.h3`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Heart = styled.img`
  justify-self: end;
`;

const Raiting = styled.div`
  font-size: 14px;
`;

const BodyPlace = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;


const data = {
  id: 4,
  title: "Город 4",
  img: "#",
  text: "много много текста",
  category: "museum",
  favorite: false,
  rating: 3,
};


const CardPage = () => {
  const [place, setPlace] = useState(data);

  let currentURL = window.location.href;

  var parts = currentURL.split('/');
  var idUrl = parts[parts.length - 1];

  useEffect(() => {
    // Получаем Место
    axios
      .get(`interest_places_by_id/?id=${idUrl}`, {})
      .then((response) => {

        console.log(response.data.name.placemarks);
        setPlace(response.data.name.placemarks[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);




  return (
    <ContainerPlace>
      <HeaderPlace>
        <HeaderPlaceTitel>
          <Title>{place.title}</Title>
          <Raiting>({place.rating})</Raiting>
        </HeaderPlaceTitel>
        <Heart src={place.favourite ? heardActiv : heard} />
      </HeaderPlace>

      <BodyPlace>
        <Image src={place.img} />
        <Text>{place.text}</Text>
      </BodyPlace>
    </ContainerPlace>
  );
};

export default CardPage;
