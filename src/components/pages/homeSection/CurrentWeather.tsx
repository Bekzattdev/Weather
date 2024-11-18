import { useGetCurrentWeatherQuery } from "../../../redux/api/current";
import scss from "./Currentweath.module.scss";

type CurrentWeatherProps = {
  city: string; // Название города для запроса
};

const CurrentWeather = ({ city }: CurrentWeatherProps) => {
  // Запрос с RTK Query, с пропуском при пустом значении `city`
  const { data, isLoading, error } = useGetCurrentWeatherQuery(
    { query: city },
    { skip: !city.trim() }
  );

  // Логирование для проверки данных
  console.log("City passed to CurrentWeather:", city);
  console.log("Weather Data Response:", data);

  // Условия загрузки, ошибки или пустого города
  if (!city.trim())
    return <p>Please select a city to see weather information.</p>;
  if (isLoading) return <p>Loading weather data...</p>;
  if (error) return <p>Failed to fetch weather data. Please try again.</p>;

  // Рендер данных, если они успешно получены
  return (
    <div className={scss.currrent}>
      <div className="container">
        {data?.current ? (
          <>
            <img
              src={`https:${data.current.condition.icon}`} // Иконка погоды
              alt={data.current.condition.text}
            />
            <div className={scss.content}>
              <h2 className={scss.temp}>
                <span>{data.current.temp_c}°C</span> {/* Температура */}
              </h2>
              <p>{data.current.condition.text}</p> {/* Описание */}
            </div>
          </>
        ) : (
          <p>No weather data available for {city}.</p>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
