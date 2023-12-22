import React, {useState} from 'react';

const Placemark = (coordinates, title, img, text) => {
    const [balloonOpen, setBalloonOpen] = useState(false);

    const handleMarkerClick = () => {
      setBalloonOpen(!balloonOpen);
    };
  
    return (
      <Placemark
        geometry={coordinates}
        options={{
          iconImageHref: "ссылка на изображение вашего маркера",
        }}
        properties={{
          balloonContentHeader:
            `${title}`,
          // Зададим содержимое основной части балуна.
          balloonContentBody:
            '<img src="img/cinema.jpg" height="100" width="200"> <br/> ' +
            '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
            "<b>Ближайшие сеансы</b> <br/> Сеансов нет.",
          // Зададим содержимое нижней части балуна.
          balloonContentFooter:
            'Информация предоставлена:<br/>OOO "Рога и копыта"' +
            '<button onClick={window.location.href="https://yandex.ru/maps/213/moscow/?from=api-maps&ll=37.617635%2C55.746036&mode=routes&origin=jsapi_2_1_79&rtext=~55.755814%2C37.617635&rtt=auto&ruri=~&z=13"}>Проложить маршрут<button/>',
          // Зададим содержимое всплывающей подсказки.
          hintContent: "Рога и копыта",
        }}
        modules={["geoObject.addon.balloon"]}
        onClick={handleMarkerClick}
        state={{
          balloonOpened: balloonOpen,
        }}
      />
    );
};

export default Placemark;