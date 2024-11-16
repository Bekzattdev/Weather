import { useState } from "react";
import { useGetSearchQuery } from "../../../redux/api/search";
import scss from "./MainPage.module.scss";

const MainPage = () => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useGetSearchQuery(search);
  console.log("weather=========", data);

  return (
    <div className={scss.MainPage}>
      <div className="container">
        <div className={scss.content}>
          <input
            type="text"
            placeholder="Search for cities..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={() => setSearch}>Search</button>
          {isLoading && <p>Loading...</p>}
          {data && (
            <ul className={scss.results}>
              {data.map((city) => (
                <ol key={city.id || city.name}>
                  {city.name}, {city.region}, {city.country}
                </ol>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
