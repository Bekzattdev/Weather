import { useEffect, useState } from "react";
import { useGetSearchQuery } from "../../../redux/api/search";
import { MdMyLocation } from "react-icons/md";
import TyperWriter from "../../../ui/writer/TyperWriter";
import scss from "./Search.module.scss";

type SearchProps = {
  onCitySelect: (city: string) => void;
};

const Search = ({ onCitySelect }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const { data } = useGetSearchQuery(search);
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    if (data && data.length > 0) {
      console.log("First city from results:", data[0].name);
      onCitySelect(data[0].name);
    }
  }, [data, onCitySelect]);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const locationData = await response.json();

          if (locationData && locationData.city) {
            setSearch(locationData.city);
            onCitySelect(locationData.city);
          } else {
            alert("Не удалось определить местоположение");
          }
        } catch (error) {
          console.error("Ошибка при определении местоположения:", error);
          alert("Произошла ошибка при получении местоположения.");
        } finally {
          setLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Ошибка при доступе к геолокации:", error);
        alert("Не удалось получить доступ к вашему местоположению.");
        setLoadingLocation(false);
      }
    );
  };
  useEffect(() => {
    handleGetLocation();
  }, []);

  return (
    <div className={scss.Search}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.search}>
            <input
              type="text"
              placeholder="Search for cities..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              className={scss.btn}
              onClick={handleGetLocation}
              disabled={loadingLocation}
              title="Title"
            >
              <span>
                {loadingLocation ? <MdMyLocation /> : <MdMyLocation />}
              </span>
            </button>
          </div>
          <div className={scss.text}>
            <TyperWriter />
          </div>
          <div>
            {data && (
              <ul className={scss.results}>
                {data.map((city) => (
                  <ol
                    key={city.id || city.name}
                    className={scss.resultItem}
                    onClick={() => onCitySelect(city.name)}
                  >
                    {city.name}, {city.region}, {city.country}
                  </ol>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
