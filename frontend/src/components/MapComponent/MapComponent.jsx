import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { datePlacemarks } from "../../date/datePlacemarks";
import { stringToCoordinates } from "../../utils/stringToCoordinates";
import  mapMuseum  from "../../images/mapMuseum.svg";
import styled from "styled-components";

const FooterInfo = styled.div`
  display: flex;
  align-items: center;

  border-radius: 10px;

  margin: 40px 30px 0 30px;
`;

const MapWithRoute = ({ ...props }) => {
  const [balloonOpen, setBalloonOpen] = useState(false);




  // console.log(props?.sityInfo[0].sityCoord);

  // console.log(props?.placemarks);

  const handleMarkerClick = () => {
    setBalloonOpen(!balloonOpen);
  };

  return (
    <FooterInfo>
      <YMaps query={{ apikey: process.env.REACT_APP_API_KEY_YANDEX_MAP }}>
        <Map
          defaultState={{
            center: stringToCoordinates(props.sityInfo[0].sityCoord),
            zoom: 12,
          }}
          style={{ width: "100%", height: "400px", borderRadius: "10px" }}
        >
          {props.placemarks.map((mark) => (
            <Placemark
              geometry={stringToCoordinates(mark.coordinates)}
              options={{
                iconColor: `#699BF7`
              }}
              properties={{
                balloonContentHeader: `<h4 class="titleMapComp">${mark.title}</h4>`,
                balloonContentBody:
                  `<img src="${mark.img}" class="imgMapComp"> <br/>` +
                  `<p class='textMapComp'>${mark.text}</p><br/>`,
                balloonContentFooter: `<button class="btnMapComp" onClick={window.location.href="https://yandex.ru/maps/213/moscow/?from=api-maps&ll=${
                  stringToCoordinates(mark.coordinates)[1]
                }%2C${
                  stringToCoordinates(mark.coordinates)[0]
                }&mode=routes&origin=jsapi_2_1_79&rtext=~${
                  stringToCoordinates(mark.coordinates)[0]
                }%2C${
                  stringToCoordinates(mark.coordinates)[1]
                }&rtt=auto&ruri=~&z=13"}>Проложить маршрут<button/>`,
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
