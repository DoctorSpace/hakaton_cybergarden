const express = require('express');
const app = express();

// Обработчик GET запроса
app.get('/data/:cityName', (req, res) => {
  const cityName = req.params.cityName;
  

  // Возвращаем JSON с данными
  const data = {
    cityNAME: cityName,
    name: 'John',
    age: 30,
    city: 'New York'
  };
  res.json(data);
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
