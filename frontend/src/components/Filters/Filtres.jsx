import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CheaakBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  gap: 10px;
`;

const LableUI = styled.label`
  cursor: pointer;

  height: 28px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  font-size: 14px;

  border: 1px solid #000000;

  &:hover {
    border: 1px solid #0000ff;
  }
`;

const InputUI = styled.input`
  display: none;

  &:checked + ${LableUI} {
    background: #699BF7;
    color: #fff;
  }
`;

const Filtres = ({create}) => {
  const [filters, setFilters] = useState({
    parks: false,
    museums: false,
    activities: false,
    shops: false,
    restaurants: false,
    beautifulPlaces: false,
  });

  useEffect(() => {
    const selectedFilters = Object.keys(filters).filter(
      (filter) => filters[filter]
    );

    create(selectedFilters)
  }, [filters]);

  const handleCheckboxChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <CheaakBoxContainer>
      <div>
        <InputUI
          id="parks"
          type="checkbox"
          checked={filters.parks}
          onChange={() => handleCheckboxChange("parks")}
        />
        <LableUI for="parks">Парки</LableUI>
      </div>

      <div>
        <InputUI
          id="museums"
          type="checkbox"
          checked={filters.museums}
          onChange={() => handleCheckboxChange("museums")}
        />
        <LableUI for="museums">Музеи</LableUI>
      </div>

      <div>
        <InputUI
          id="activities"
          type="checkbox"
          checked={filters.activities}
          onChange={() => handleCheckboxChange("activities")}
        />
        <LableUI for="activities">Активности</LableUI>
      </div>

      <div>
        <InputUI
          id="shops"
          type="checkbox"
          checked={filters.shops}
          onChange={() => handleCheckboxChange("shops")}
        />
        <LableUI for="shops">Магазины</LableUI>
      </div>

      <div>
        <InputUI
          id="restaurants"
          type="checkbox"
          checked={filters.restaurants}
          onChange={() => handleCheckboxChange("restaurants")}
        />
        <LableUI for="restaurants">Рестораны</LableUI>
      </div>

      <div>
        <InputUI
          id="beautifulPlaces"
          type="checkbox"
          checked={filters.beautifulPlaces}
          onChange={() => handleCheckboxChange("beautifulPlaces")}
        />
        <LableUI for="beautifulPlaces">Красивые места</LableUI>
      </div>
    </CheaakBoxContainer>
  );
};

export default Filtres;
