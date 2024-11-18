import { useGetCurrentWeatherQuery } from "../../../redux/api/current";
import scss from "./Currentweath.module.scss";

type currentWeather = {
  city: string;
};

const CurrentWeather = ({ city }: currentWeather) => {
  const { data, isLoading, error } = useGetCurrentWeatherQuery({ query: city });
  console.log();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch weather data.</p>;

  return (
    <div className={scss.currrent}>
      <div className="container">
        {data?.current && (
          <>
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
            <div className={scss.content}>
              <h2 className={scss.temp}>
                <span>{data.current.temp_c}°C</span>
              </h2>
              <p>{data.current.condition.text}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
