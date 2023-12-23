import React, { useState } from 'react';
import axios from 'axios';

const Filtres = () => {
  const [filters, setFilters] = useState({
    parks: false,
    museums: false,
    activities: false,
    shops: false,
    restaurants: false,
    beautifulPlaces: false,
  });

  const handleCheckboxChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleApplyFilters = () => {
    const selectedFilters = Object.keys(filters).filter(
      (filter) => filters[filter]
    );

    // Отправка запроса Axios с выбранными фильтрами
    // axios
    //   .get("https://example.com/api/places", {
    //     params: { filters: selectedFilters },
    //   })
    //   .then((response) => {
    //     // Обработка ответа
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     // Обработка ошибки
    //     console.error(error);
    //   });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={filters.parks}
          onChange={() => handleCheckboxChange("парк")}
        />
        Parks
      </label>

      <label>
        <input
          type="checkbox"
          checked={filters.museums}
          onChange={() => handleCheckboxChange("museums")}
        />
        museums
      </label>

      <label>
        <input
          type="checkbox"
          checked={filters.activities}
          onChange={() => handleCheckboxChange("activities")}
        />
        activities
      </label>

      <label>
        <input
          type="checkbox"
          checked={filters.shops}
          onChange={() => handleCheckboxChange("shops")}
        />
        shops
      </label>

      <label>
        <input
          type="checkbox"
          checked={filters.restaurants}
          onChange={() => handleCheckboxChange("restaurants")}
        />
        restaurants
      </label>

      <label>
        <input
          type="checkbox"
          checked={filters.beautifulPlaces}
          onChange={() => handleCheckboxChange("beautifulPlaces")}
        />
        beautifulPlaces
      </label>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filtres;
