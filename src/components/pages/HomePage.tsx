import { useState } from "react";
import Search from "./homeSection/Search";
import CurrentWeather from "./homeSection/CurrentWeather";
import scss from "./HomePage.module.scss";
import WeadPage from "./homeSection/WeadPage";

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");

  return (
    <div className={scss.main}>
      <div className={scss.search}>
        <Search onCitySelect={setSelectedCity} />
      </div>
      <div className={scss.back}>
        <div className={scss.currentWeather}>
          <CurrentWeather city={selectedCity} />
        </div>
        <div className={scss.weadPage}>
          <WeadPage city={selectedCity} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
