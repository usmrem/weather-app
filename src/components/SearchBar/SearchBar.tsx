import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

import "../../styles/search.css";

type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;