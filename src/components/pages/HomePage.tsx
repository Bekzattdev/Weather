import { useState } from "react";
import Search from "./homeSection/Search";
import CurrentWeather from "./homeSection/CurrentWeather";
import scss from "./HomePage.module.scss";
import WeadPage from "./homeSection/WeadPage";

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");

  return (
    <div className={scss.back}>
      <div className={scss.ras}>
        <CurrentWeather city={selectedCity} />
        <Search onCitySelect={setSelectedCity} />
        <WeadPage city={selectedCity} />
      </div>
    </div>
  );
};

export default HomePage;
