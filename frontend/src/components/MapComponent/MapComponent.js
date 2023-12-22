import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { datePlacemarks } from "../../date/datePlacemarks";


const MapWithRoute = () => {
  const coordinates = [55.755814, 37.617635]; // координаты места
  const [balloonOpen, setBalloonOpen] = useState(false);

  console.log(datePlacemarks[0].cityName);

  const handleMarkerClick = () => {
    setBalloonOpen(!balloonOpen);
  };

  const dateBase = datePlacemarks[0].placemarks


  const toMap = () => {
    const link =
      "https://yandex.ru/maps/213/moscow/?from=api-maps&ll=37.617635%2C55.746036&mode=routes&origin=jsapi_2_1_79&rtext=~55.755814%2C37.617635&rtt=auto&ruri=~&z=13";
  };

  return (
    <YMaps query={{ apikey: "984dd8e3-bce1-4c23-8839-c0557ac4f7e7" }}>
      <Map
        defaultState={{ center: coordinates, zoom: 14 }}
        style={{ width: "100%", height: "400px" }}
      >

        
        {dateBase.map((mark) => 
          <Placemark
            geometry={mark.coordinates}
            options={{
              iconImageHref: "ссылка на изображение вашего маркера",
            }}
            properties={{
              balloonContentHeader:
                `<p>${mark.title}<p/>`,
              balloonContentBody:
                '<img src="img/cinema.jpg" height="100" width="200"> <br/> ' +
                '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                "<b>Ближайшие сеансы</b> <br/> Сеансов нет.",
              balloonContentFooter:
                'Информация предоставлена:<br/>OOO "Рога и копыта"' +
                '<button onClick={window.location.href="https://yandex.ru/maps/213/moscow/?from=api-maps&ll=37.617635%2C55.746036&mode=routes&origin=jsapi_2_1_79&rtext=~55.755814%2C37.617635&rtt=auto&ruri=~&z=13"}>Проложить маршрут<button/>',
              hintContent: "Рога и копыта",
            }}
            modules={["geoObject.addon.balloon"]}
            onClick={handleMarkerClick}
            state={{
              balloonOpened: balloonOpen,
            }}
          />
        )}

      </Map>
    </YMaps>
  );
};

export default MapWithRoute;
