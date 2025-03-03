import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"
import StatsPage from "./pages/StatsPage";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <Router>
      <h1>
      <Link to = "/">
      <img src="icons/home.png" alt ="ER" style = {{width: "40px", height: "40px"}}/>
      </Link>
      </h1>
      <Header />
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/stats/:englishName" element ={<StatsPage/>}/>
        <Route path="*" element={<Link to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
