import React, { useEffect, useState } from "react";
import useLocation from "../hooks/useLocation";
import useWeather from "../hooks/useWeather";

const Card = () => {
  const { weather } = useWeather();
  const { hour, minute } = useLocation();

  let iconApp = weather?.weather[0].icon + "@4x.png";
  let urlApp = `https://openweathermap.org/img/wn/${iconApp}`;

  const [isBoolean, setisBoolean] = useState(true);
  const toogleIsBoolean = () => {
    setisBoolean(!isBoolean);
  };

  


  return (
    <div>
      
      <article className="card">
        <img className="icon" src={urlApp} />
        <h1 className="title">{weather?.weather[0].main}</h1>
        <section className="container">
          
          <i className="fa-solid fa-location-dot ubi"></i>
          {weather?.name}, {weather?.sys.country} <br />
          <i className="fa-solid fa-temperature-full ubi"></i>
          {weather?.main.pressure} mB <br />
          <i className="fa-solid fa-clock ubi"></i>
          {hour}:{minute}
          <br />
          <i className="fa-solid fa-wind ubi"></i>
          {weather?.wind.speed} Km/h
          <br />
          <i className="fa-solid fa-cloud ubi"></i>
          {weather?.clouds.all} %<br />
        </section>
        <section className="container2">
          <h3>
            Temp:
            {isBoolean
              ? (weather?.main.temp - 273.15).toFixed(0)
              : ((weather?.main.temp - 273.15) * 1.8 + 32).toFixed(0)}
            {isBoolean ? "°C" : "°F"}
          </h3>
          <button className="button" onClick={toogleIsBoolean}>
            Cambiar C/F{" "}
          </button>
        </section>
      </article>
    </div>
  );
};

export default Card;
