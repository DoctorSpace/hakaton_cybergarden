import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
import heard from "../../images/heard.svg";
import heardActiv from "../../images/heardActiv.svg";

import TopPlace1 from "../../images/badTopPlace/TopPlace1.png";
import TopPlace2 from "../../images/badTopPlace/TopPlace2.png";
import TopPlace3 from "../../images/badTopPlace/TopPlace3.png";
import TopPlace4 from "../../images/badTopPlace/TopPlace4.png";
import TopPlace5 from "../../images/badTopPlace/TopPlace5.png";

const Title = styled.h3`
  margin: 0 20px;
  font-size: 18px;
`;

const CardTitle = styled.h3`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 28px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #ffffff;
    border-radius: 10px;

    font-size: 18px;
    z-index: 5;
    color: #000000;

    position: absolute;
    bottom: 10px;
    left: 10px;
  }
`;

const Images = styled.img`
  border-radius: 10px;
  height: 160px;
  width: 100%;
  background-size: cover;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Heard = styled.img`
  width: 22px;
  height: 22px;

  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

const TopRatedCardPlaces = styled.div`
  margin: 6px 20px 0px 20px;

  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TopRatedCard = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    position: relative;
  }
`;

const TopRatedPlaces = () => {
  const { height, width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // установите true для автоматической прокрутки
    autoplaySpeed: 2000, // задайте скорость автоматической прокрутки в миллисекундах
  };

  const arr = [
    {
      title: "Text 1",
      img: TopPlace1,
      favorite: false,
    },
    {
      title: "Text 2",
      img: TopPlace2,
      favorite: false,
    },
    {
      title: "Text 3",
      img: TopPlace3,
      favorite: true,
    },
    {
      title: "Text 4",
      img: TopPlace4,
      favorite: false,
    },
    {
      title: "Text 5",
      img: TopPlace5,
      favorite: false,
    },
  ];

  return (
    <>
      <Title>Места с самым высоким рейтингом</Title>
      <TopRatedCardPlaces>
        {width < 768 ? (
          <Slider {...settings}>
            {arr.map((item) => (
              <TopRatedCard>
                <Heard src={item.favorite ? heardActiv : heard} />
                <Images src={item.img} />
                <CardTitle>{item.title}</CardTitle>
              </TopRatedCard>
            ))}
          </Slider>
        ) : (
          arr.map((item) => (
            <TopRatedCard>
              <Heard src={item.favorite ? heardActiv : heard} />
              <Images src={item.img} />
              <CardTitle>{item.title}</CardTitle>
            </TopRatedCard>
          ))
        )}
      </TopRatedCardPlaces>
    </>
  );
};

export default TopRatedPlaces;
