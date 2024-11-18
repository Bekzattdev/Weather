import { useState } from "react";
import Search from "./homeSection/Search";
import CurrentWeather from "./homeSection/CurrentWeather";
import scss from "./HomePage.module.scss";

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState<string>(""); // Состояние города

  return (
    <div className={scss.back}>
      {/* Компонент поиска */}
      <Search onCitySelect={setSelectedCity} />
      {/* Компонент погоды */}
      <CurrentWeather city={selectedCity} />
    </div>
  );
};

export default HomePage;
