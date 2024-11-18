import Search from "./homeSection/Search";
import scss from "./HomePage.module.scss";
import { useState } from "react";
import CurrentWeather from "./homeSection/CurrentWeather";
const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  return (
    <div className={scss.back}>
      <Search onCitySelect={setSelectedCity} />
      {/* {selectedCity && <CurrentWeather city={selectedCity} />} */}
      <CurrentWeather city={selectedCity} />
    </div>
  );
};

export default HomePage;
