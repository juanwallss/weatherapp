import React, { useState } from 'react'
import axios from 'axios'
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6f07e40cdcac15e8361b67b4c303c179`
const searchLocation = (event) => {
  if(event.key === 'Enter'){
  axios.get(url).then((response) => {
    setData(response.data)
    console.log(response.data);
  })
  setLocation('')
}
}

  return (
    <div className="app">
      <div className="search">
        <input 
        type="text"
        value={location}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        onChange={event => {
          setLocation(event.target.value)
        }} />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
          <p><a href={`https://www.google.com/search?q=weather+in+${data.name}`} target='_blank' rel='noreferrer'>{data.name}</a></p>  
          </div>
          <div className="temp">
            <h1>{data.main ? parseInt(data.main.temp -273) + 'ºC' : null}</h1>
          </div>       
          <div className="description">
          <p>{data.weather ? data.weather[0].description : null}</p>
          </div>   
        </div>        
        <div className="bottom">
          <div className="feels">
            <p><strong>{data.main ? parseInt(data.main.feels_like -273) + 'ºC' : null}</strong></p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p><strong>{data.main ? data.main.humidity + '%' : null}</strong></p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p><strong>{data.wind ? parseInt(data.wind.speed * 1.6093440) +"KMH": null}</strong></p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
