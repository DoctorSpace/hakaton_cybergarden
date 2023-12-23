import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { datePlacemarks } from "../../date/datePlacemarks";
import styled from "styled-components";



const FooterInfo = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;

  margin: 40px 30px 0 30px;
`;


const MapWithRoute = (dots) => {
  const [balloonOpen, setBalloonOpen] = useState(false);

  const handleMarkerClick = () => {
    setBalloonOpen(!balloonOpen);
  };

  return (
    <FooterInfo>
      <YMaps query={{ apikey: process.env.REACT_APP_API_KEY_YANDEX_MAP }}>
        <Map
          defaultState={{ center: datePlacemarks[0].cityCoordinates, zoom: 14 }}
          style={{ width: "100%", height: "400px", borderRadius: "10px" }}
        >
          {datePlacemarks[0].placemarks.map((mark) => (
            <Placemark
              geometry={mark.coordinates}
              options={{
                iconImageHref: "ссылка на изображение вашего маркера",
              }}
              properties={{
                balloonContentHeader: `<h4 class="titleMapComp">${mark.title}</h4>`,
                balloonContentBody:
                  `<img src="${mark.img}" class="imgMapComp"> <br/>` +
                  `<p class='textMapComp'>${mark.text}</p><br/>`,
                balloonContentFooter: `<button class="btnMapComp" onClick={window.location.href="https://yandex.ru/maps/213/moscow/?from=api-maps&ll=${mark.coordinates[1]}%2C${mark.coordinates[0]}6&mode=routes&origin=jsapi_2_1_79&rtext=~${mark.coordinates[0]}%2C37.617635&rtt=auto&ruri=~&z=13"}>Проложить маршрут<button/>`,
              }}
              modules={["geoObject.addon.balloon"]}
              onClick={handleMarkerClick}
              state={{
                balloonOpened: balloonOpen,
              }}
            />
          ))}
        </Map>
      </YMaps>
    </FooterInfo>
  );
};

export default MapWithRoute;
