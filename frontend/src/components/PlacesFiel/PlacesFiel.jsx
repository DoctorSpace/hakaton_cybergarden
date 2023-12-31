import React from "react";
import styled from "styled-components";
import { datePlacesFiel } from "../../date/datePlacesFiel";
import { Link } from "react-router-dom";

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

const PlacesFiel = (img) => {


  return (
    <Places>
      <Title>Популярные направления</Title>

      <Museums>
        <Link to="/place?museums">
          <Text>Музеи</Text>
          <Images src={img.props[0].Museums} />
        </Link>
      </Museums>

      <Restaurants>
        <Link to="/place?restaurants">
          <Text>Рестораны</Text>
          <Images src={img.props[0].Restaurants} />
        </Link>
      </Restaurants>

      <Activities>
        <Link to="/place?activities">
          <Text>Активности</Text>
          <Images src={img.props[0].Activities} />
        </Link>
      </Activities>

      <Parks>
        <Link to="/place?parks">
          <Text>Парки</Text>
          <Images src={img.props[0].Parks} />
        </Link>
      </Parks>

      <Stores>
        <Link to="/place?stores">
          <Text>Магазины</Text>
          <Images src={img.props[0].Stores} />
        </Link>
      </Stores>

      <Beautiful>
        <Link to="/place?beautiful">
          <Text>Красивые места</Text>
          <Images src={img.props[0].Beautiful} />
        </Link>
      </Beautiful>
    </Places>
  );
};

export default PlacesFiel;
