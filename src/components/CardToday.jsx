import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature1,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/CardWeather.css";

export const CardToday = () => {
  return (
    <div className="cardToday">
      <div className="top"></div>
      <div className="image">
        <img src="images/Clear.png" alt="weather-image" />
      </div>
      <div className="infoToday">
        <h3>
          15{" "}
          <span>
            <FontAwesomeIcon icon={faTemperature1}></FontAwesomeIcon>°
          </span>
        </h3>
        <p className="typeWeather">shower</p>
        <p>today - fri 5 jun</p>
        <p>
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> helsinky
        </p>
      </div>
    </div>
  );
};
