import React, { useState, useEffect } from "react";
import "../styles/Weather.css";

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
  //   const { temp, feels_like, temp_min, temp_max, pressure, humidity } = data;
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

        {data ? (
          <>
            <h1>{data.temp}</h1>
            <h3>Feels Like: {data.feels_like}</h3>
            <div className="">
              <div>
                <h5>Highest</h5>
                <h4>{data.temp_max}</h4>
              </div>
              <div>
                <h5>Lowest</h5>
                <h4>{data.temp_min}</h4>
              </div>
            </div>
            <div>
              <h5>Humadity</h5>
              <h4>{data.humidity}</h4>
            </div>
            <div>
              <h5>Pressure</h5>
              <h4>{data.pressure}</h4>
            </div>
          </>
        ) : (
          <h5>No data found</h5>
        )}
      </div>
    </div>
  );
}
