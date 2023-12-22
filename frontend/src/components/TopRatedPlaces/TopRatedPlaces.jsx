import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  margin: 0 20px;
  font-size: 18px;
`;

const TopRatedCardPlaces = styled.div`
  margin: 6px 20px 0px 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

const TopRatedCard = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: aqua;
`;

const TopRatedPlaces = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      <Title>Места с самым высоким рейтингом</Title>
      <TopRatedCardPlaces>
        {arr.map((item) => (
          <TopRatedCard>

            {item}
        </TopRatedCard>
        ))}
      </TopRatedCardPlaces>
    </>
  );
};

export default TopRatedPlaces;
