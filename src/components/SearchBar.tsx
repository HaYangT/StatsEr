import React, { useState } from "react";
import { experiments } from "../data/experiments";
import { Experiment } from "../models/Experiment";
import "../components/styles/SearchBar.css";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Experiment[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = experiments.filter(
      (exp) =>
        exp.name.toLowerCase().includes(value.toLowerCase()) ||
        exp.alias.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (exp: Experiment) => {
    setQuery(exp.name);
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="실험체 검색..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="search-results">
          {suggestions.map((exp) => (
            <li key={exp.englishName} onClick={() => handleSelect(exp)} className="search-item">
              <img src={exp.icon} alt={exp.name} />
              {exp.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
