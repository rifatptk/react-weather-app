import React, { useState, useEffect } from "react";
import "../styles/Weather.css";
import Forecast from "./Forecast";

export default function Weather() {
  const [city, setcity] = useState("dhaka");
  const [data, setdata] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3480c04fb97d4ba0d77b0b465ef674e`
    )
      .then((response) => response.json())
      .then((data) => setdata(data.main))
      .catch((error) => console.log(error));
  }, [city]);
  console.log(data);

  return (
    <div className="w-75 mx-auto bg-dark text-light text-center">
      <div className="container p-5">
        <h1>Q C A S T</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />
        <h2>{city}</h2>

        {data ? <Forecast data={data} /> : <h5>No data found</h5>}
      </div>
    </div>
  );
}
