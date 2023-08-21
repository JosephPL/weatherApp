import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperature1 } from "@fortawesome/free-solid-svg-icons";
import "../styles/cardToday.css";

export const CardWeather = () => {
  return (
    <div className="weekWeather">
      <div className="cardWeather">
        <div className="title">Tomorrow</div>
        <div className="imageWeather">
          <img src="images/Sleet.png" alt="weather-image" />
        </div>
        <div className="tempWeather">
          15<FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>° -{" "}
          <span>
            12
            <FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>°
          </span>
        </div>
      </div>

      <div className="cardWeather">
        <div className="title">day</div>
        <div className="imageWeather">
          <img src="images/Clear.png" alt="weather-image" />
        </div>
        <div className="tempWeather">
          11<FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>° - 15
          <FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>°
        </div>
      </div>

      <div className="cardWeather">
        <div className="title">day</div>
        <div className="imageWeather">
          <img src="images/Clear.png" alt="weather-image" />
        </div>
        <div className="tempWeather">
          11<FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>° - 15
          <FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>°
        </div>
      </div>

      <div className="cardWeather">
        <div className="title">day</div>
        <div className="imageWeather">
          <img src="images/Clear.png" alt="weather-image" />
        </div>
        <div className="tempWeather">
          11<FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>° - 15
          <FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>°
        </div>
      </div>

      <div className="cardWeather">
        <div className="title">day</div>
        <div className="imageWeather">
          <img src="images/Clear.png" alt="weather-image" />
        </div>
        <div className="tempWeather">
          11<FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>° - 15
          <FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>°
        </div>
      </div>
    </div>
  );
};
