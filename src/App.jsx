import React, { useState } from "react";
import Country from "./components/Country";
import CountryList from "./components/CountryList";
import VisitedCountry from "./components/VisitedCountry";

const App = () => {
  const [Visited, setVisited] = useState([]);

  const handlevisit = (country) => {
    setVisited([...Visited, country]);
  };

  return (
    <div>
      <h2 className="underline font-bold text-2xl text-center mt-2">Visited Country</h2>
      
      <VisitedCountry Visited={Visited} />
      <h2 className="underline font-bold text-2xl text-center mt-2">Country Lists</h2>
      
      <br />
      <CountryList Visit = {handlevisit} />
    </div>
  );
};

export default App;
