import React from "react";
import { Link } from "react-router-dom";
import { Subjects } from "../data/subjects";

const CharacterStats: React.FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", padding: "20px" }}>
      {Subjects.map((sbj) => (
        <Link key={sbj.englishName} to={`/stats/${sbj.englishName}`} style={{ textAlign: "center", textDecoration: "none", color: "black" }}>
          <img src={`/icons/${sbj.icon}`} alt={sbj.name} style={{ width: "50px", height: "50px" }} />
          <p>{sbj.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default CharacterStats;
