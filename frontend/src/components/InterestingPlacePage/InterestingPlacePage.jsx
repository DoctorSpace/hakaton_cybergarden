import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { dateGeodiscoveries } from "../../date/dateGeodiscoveries";
import heard from "../../images/heard.svg";
import arrowLink from "../../images/arrowLink.svg";
import heardActiv from "../../images/heardActiv.svg";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import Filtres from "../Filters/Filtres";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-right: 30px;
`;

const H3 = styled.h3`
  display: block;
  margin-top: 40px;
  font-size: 18px;
`;

const BlockCategory = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Category = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  height: 24px;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #000000;
`;

const BlockContent = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 4px 4px 17px 0px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 4px 4px 17px 0px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  padding: 20px;
  height: 220px;
  border-radius: 10px;
`;

const Title = styled.h3`
  padding: 0 20px 0 20px;
  font-size: 18px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Text = styled.h3`
  padding: 0 20px 0 20px;
  font-size: 14px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Heart = styled.img`
  position: absolute;
  z-index: 5;
  right: 10px;
  top: 10px;

  border-radius: 100%;
  border: 1px solid #00000067;
`;

const Raiting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  height: 26px;
  padding-left: 10px;
  padding-right: 10px;

  color: #fff;

  backdrop-filter: blur(5px);
  background: ${(props) => props.color};

  position: absolute;
  top: 10px;
  left: 10px;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

const ButtonConteiner = styled.div`
  margin-bottom: 50px;

  display: flex;
  justify-content: center;
  align-content: center;
`;

const NextBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  min-width: 200px;

  height: 42px;

  color: #fff;
  font-size: 18px;
  border-radius: 10px;

  border: 0;
  background-color: #2414ff;

  &:hover {
    background-color: #3b2ef7;
  }
`;

const DivLinkToPlace = styled.div`
  position: absolute;
  display: flex;

  bottom: 10px;
  right: 10px;
`;

const InterestingPlacePage = () => {
  const cheackRaitingColor = (number) => {
    if (number > 7) {
      return "#98c060bf";
    }

    if (number > 3) {
      return "#d3d557cd";
    }

    return "#d5664dcb";
  };

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Получаем все Места
    axios
      .get("/dots", {})
      .then((response) => {
        setPlaces(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [places]);

  return (
    <Container>
      <H3>Откройте для себя места</H3>

      <Filtres />

      <BlockCategory>
        <Category>Музеи</Category>
        <Category>Активности</Category>
        <Category>Рестораны</Category>
        <Category>Парки</Category>
      </BlockCategory>

      <BlockContent>
        {dateGeodiscoveries.map((item) => (
          <Content>
            <Link to={`/place/${item.id}`}>
              <Image src={item.img} />
            </Link>
            <Raiting color={cheackRaitingColor(item.rating)}>
              {item.rating}
            </Raiting>
            <Heart src={item.favorite ? heardActiv : heard} />
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
            <DivLinkToPlace>
              <Link to={`/place/${item.id}`}>
                <img src={arrowLink} alt="toPlace" />
              </Link>
            </DivLinkToPlace>
          </Content>
        ))}
      </BlockContent>
      <ButtonConteiner>
        <NextBtn>Загрузить ещё</NextBtn>
      </ButtonConteiner>
    </Container>
  );
};

export default InterestingPlacePage;
