import React from "react";
import {Link} from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header style={{ display: "flex",justifyContent : "space-between", padding : "10px", background: '#333',color:"white" }}>
      <nav>
        <ul style = {{listStyle : "none", display : "flex", gap : "15px"}}>
          <li>
            <Link to = "/stats" style = {{ color:"white",textDecoration : "none"}}>실험체별 통계</Link>
          </li>
          <li>추가 예정...</li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;
