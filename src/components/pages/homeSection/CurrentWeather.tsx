import { useState } from "react";
import { useGetCurrentWeatherQuery } from "../../../redux/api/current";
import scss from "./Currentweath.module.scss";

type CurrentWeatherProps = {
  city: string;
};

const CurrentWeather = ({ city }: CurrentWeatherProps) => {
  const { data } = useGetCurrentWeatherQuery(
    { query: city },
    { skip: !city.trim() }
  );
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Suturday",
  ];
  let monthes = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Aug",
    "Sep",
    "Oct",
    "Dec",
  ];

  const today = new Date();
  const month = monthes[today.getMonth()];
  const year = today.getFullYear();
  const day = days[today.getDay()];
  const time = today.getHours();
  const minute = today.getMinutes();
  const [currentDay, setCurrentDay] = useState(
    `${time}:${minute}-${day}, ${month}`
  );

  return (
    <div className={scss.CurrrentWeather}>
      <div className="container">
        {data?.current ? (
          <div className={scss.content}>
            <div className={scss.hero}>
              <h1 className={scss.temp}>
                <span>{data.current.temp_c}°</span>
              </h1>
              <div className={scss.city}>
                <h2>
                  <span>{city}</span>
                </h2>
                <h3>
                  <span>{currentDay}</span>
                </h3>
              </div>
              <div className={scss.weather}>
                <img
                  src={`https:${data.current.condition.icon}`}
                  alt={data.current.condition.text}
                />
                <p>{data.current.condition.text}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>{city}</p>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
