import React, { useState } from 'react';

const api = {
  key: "9dc0425834e64c3aaf4161055252710",  // your WeatherAPI key
  base: "https://api.weatherapi.com/v1/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}current.json?key=${api.key}&q=${query}&aqi=no`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        })
        .catch(err => console.error("Error fetching weather:", err));
    }
  };

  const dateBuilder = (d) => {
    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];
    const days = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className={(weather && weather.current && weather.current.temp_c > 16) ? 'app warm' : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {weather && weather.location && weather.current ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.location.name}, {weather.location.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.current.temp_c)}°c
              </div>
              <div className="weather">{weather.current.condition.text}</div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
