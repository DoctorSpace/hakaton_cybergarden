export function stringToCoordinates(coordString) {
    try {
        // Разделение строки на координаты по запятой и преобразование их в числа с плавающей точкой
        const [lat, lon] = coordString.split(',').map(parseFloat);
        
        // Проверка на NaN после преобразования
        if (isNaN(lat) || isNaN(lon)) {
            throw new Error("Некорректный формат координат");
        }

        // Возвращение координат в виде массива
        return [lat, lon];
    } catch (error) {
        // Обработка возможных ошибок при преобразовании
        console.error(error.message);
        return null;
    }
}