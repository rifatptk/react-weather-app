import React from "react";

export default function Forecast(props) {
  const { data, city } = props;
  return (
    <>
      <i className="fa-solid fa-city h3"></i>
      <h5 className="">{city.toUpperCase()}</h5>
      <h2>{data.temp}°c</h2>
      <p>Feels Like: {data.feels_like}°c</p>
      <div className="d-flex justify-content-center gap-5 p-4">
        <div>
          <i className="fa-solid fa-temperature-arrow-up h4"></i>
          <h6>Highest Temp</h6>
          <h5>{data.temp_max}°c</h5>
        </div>
        <div>
          <i className="fa-solid fa-temperature-arrow-down h4"></i>
          <h6>Lowest Temp</h6>
          <h5>{(data.temp_min - 5.9).toFixed(2)}°c</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-5 pb-4">
        <div>
          <i className="fa-solid fa-bowl-rice h4"></i>
          <h6>Humadity</h6>
          <h5>{data.humidity}%</h5>
        </div>
        <div>
          <i className="fa-solid fa-spray-can-sparkles h4"></i>
          <h6>Pressure</h6>
          <h5>{data.pressure}psi</h5>
        </div>
      </div>
    </>
  );
}
