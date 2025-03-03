import React from "react";
import SearchBar from "../components/SearchBar";

const Home : React.FC =() =>{
    return (
        <div style = {{display : "flex", justifyContent: "center", alignItems : "center,", height: "100vh"}}>
            <SearchBar/>
        </div>
    )
}

export default Home;