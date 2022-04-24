import React from "react";

export default function Forecast(props) {
  const { data } = props;
  return (
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
  );
}
