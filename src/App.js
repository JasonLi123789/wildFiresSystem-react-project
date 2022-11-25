import {useState} from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHum] = useState('');

  const handleCityChange = event => {
    setCity(event.target.value);
    console.log('value is:', event.target.value);
  };
  const handleDateChange = event => {
    setDate(event.target.value);
    console.log('value is:', event.target.value);
  };
  const handleTempChange = event => {
    setTemp(event.target.value);
    console.log('value is:', event.target.value);
  };
  const handleHumChange = event => {
    setHum(event.target.value);
    console.log('value is:', event.target.value);
  };

  var content ={
    Country: city,
    Date: date,
    Temp: temp,
    Humidity: humidity
  }
  var data_jsonfile = JSON.stringify(content);
  
  
  return (
    <div id="alldata">
    <div id="Divcity">
      <input
        type="text"
        id="city"
        name="city"
        onChange={handleCityChange}
        value={city}
      />
      <h2>City: {city}</h2>

    </div>
    <div id="Divdate">
      <input
        type="date"
        id="date"
        name="date"
        onChange={handleDateChange}
        value={date}
      />
      <h2>Date: {date}</h2>
    </div>
    <div id="DivTemp">
      <input
        type="Temp"
        id="Temp"
        name="Temp"
        onChange={handleTempChange}
        value={temp}
      />
      <h2>Temp: {temp}</h2>
    </div>
    <div id="DivHum">
      <input
        type="Hum"
        id="Hum"
        name="Hum"
        onChange={handleHumChange}
        value={humidity}
      />
      <h2>Humidity: {humidity}</h2>
    </div>
    <h2>JSONis: {data_jsonfile}</h2>
</div>
    
  );
};

export default App;
