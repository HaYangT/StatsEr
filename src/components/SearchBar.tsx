import React, { useState } from "react";
import { Subjects } from "../data/subjects";
import { Subject } from "../models/Subject";
import { useLocation, useNavigate } from "react-router-dom"
import "../components/styles/SearchBar.css";

const SearchBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Subject[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = Subjects.filter(
      (sbj) =>
        sbj.name.toLowerCase().includes(value.toLowerCase()) ||
        sbj.alias.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (sbj: Subject) => {
    navigate(`/stats/${sbj.englishName}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="알고싶은 실험체의 정보를 검색해주세요"
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="search-results">
          {suggestions.map((sbj) => (
            <li key={sbj.englishName} onClick={() => handleSelect(sbj)} className="search-item">
              <img src={sbj.icon} alt={sbj.name} />
              {sbj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
