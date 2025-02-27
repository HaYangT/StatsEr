import React from "react";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <h1>ER Project</h1>
      <SearchBar /> {/* 검색창 컴포넌트 추가 */}
    </header>
  );
};

export default Header;
