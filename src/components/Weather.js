import React, { useState, useEffect } from "react";
import "../styles/Weather.css";
import Forecast from "./Forecast";

export default function Weather() {
  const [city, setcity] = useState("dhaka");
  const [data, setdata] = useState();
  const [theme, settheme] = useState("warning");
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f3480c04fb97d4ba0d77b0b465ef674e`
    )
      .then((response) => response.json())
      .then((data) => setdata(data.main))
      .catch(() => console.log("there was an error fetching data"));
  }, [city]);
  console.log(data);

  return (
    <div
      className={`weather-card w-75 mx-auto bg-dark text-${theme} text-center mt-3`}
    >
      <div className="header pt-3 mb-2">
        <i className="fa-solid fa-cloud h1"></i>
        <h1 className="my-3 fw-bold">Q C A S T</h1>
        <label htmlFor="input">Enter city</label>
        <br />

        <input
          id="input"
          className={`w-40 mb-3 bg-dark text-light text-center border-0 border-2 border-bottom border-${theme} `}
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />
      </div>

      {data ? (
        <Forecast data={data} city={city} />
      ) : (
        <div className="pb-5">
          <h5>No data found, </h5>
          <p>Please enter a valid city name</p>
        </div>
      )}
    </div>
  );
}
