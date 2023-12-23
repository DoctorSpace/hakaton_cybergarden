import React from "react";
import styled from "styled-components";
import { datePlacesFiel } from "../../date/datePlacesFiel";

const Title = styled.h3`
  font-size: 18px;
  grid-area: z;
`;

const Places = styled.div`
  margin: 40px 20px;

  display: grid;
  font-size: 12px;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 20px 180px 180px 180px;
  grid-template-areas:
    "z z z z"
    "a b d e"
    "a b d f"
    "a c d f";

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 20px 160px 160px 160px;
    grid-template-areas:
      "z z z"
      "a a b"
      "c d e"
      "f f f";
  }
`;

const Museums = styled.div`
  cursor: pointer;
  position: relative;
  grid-area: a;
`;
const Restaurants = styled.div`
  cursor: pointer;
  position: relative;
  grid-area: b;
`;
const Activities = styled.div`
  cursor: pointer;
  position: relative;
  grid-area: c;
`;

const Parks = styled.div`
  cursor: pointer;
  position: relative;
  grid-area: d;
`;

const Stores = styled.div`
  cursor: pointer;
  position: relative;
  grid-area: e;
`;

const Beautiful = styled.div`
  cursor: pointer;
  position: relative;
  grid-area: f;
`;

const Images = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;
  background-size: cover;
  object-fit: cover;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 28px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ffffff;
  border-radius: 10px;

  font-size: 12px;
  z-index: 5;
  color: #000000;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const PlacesFiel = (dots) => {
  return (
    <Places>
      <Title>Популярные направления</Title>
      <Museums>
        <Text>Музеи</Text>
        <Images src={datePlacesFiel.Museums} />
      </Museums>
      <Restaurants>
        <Text>Рестораны</Text>
        <Images src={datePlacesFiel.Restaurants} />
      </Restaurants>
      <Activities>
        <Text>Активности</Text>
        <Images src={datePlacesFiel.Activities} />
      </Activities>
      <Parks>
        <Text>Парки</Text>
        <Images src={datePlacesFiel.Parks} />
      </Parks>
      <Stores>
        <Text>Магазины</Text>
        <Images src={datePlacesFiel.Stores} />
      </Stores>
      <Beautiful>
        <Text>Красивые места</Text>
        <Images src={datePlacesFiel.Beautiful} />
      </Beautiful>



    </Places>
  );
};

export default PlacesFiel;
