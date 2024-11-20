import { useState } from "react";
import Search from "./homeSection/Search";
import CurrentWeather from "./homeSection/CurrentWeather";
import scss from "./HomePage.module.scss";

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  return (
    <div className={scss.back}>
      <Search onCitySelect={setSelectedCity} />
      <CurrentWeather city={selectedCity} />
    </div>
  );
};

export default HomePage;
