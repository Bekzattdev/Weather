import scss from "./Search.module.scss";
import { useState } from "react";
import { useGetSearchQuery } from "../../../redux/api/search";
import { MdMyLocation } from "react-icons/md";
import TyperWriter from "../../../ui/writer/TyperWriter";

type SearchProps = {
  onCitySelect: (city: string) => void;
};

const Search = ({ onCitySelect }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading } = useGetSearchQuery(search);

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
            <button>
              <span>
                <MdMyLocation />
              </span>
            </button>
          </div>
          <div className={scss.text}>
            <TyperWriter />
          </div>
          <div>
            {isLoading && <p>Loading...</p>}
            {data && (
              <ul className={scss.results}>
                {data.map((city) => (
                  <ol
                    key={city.id || city.name}
                    onClick={() => onCitySelect(city.name)}
                    className={scss.resultItem}
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
