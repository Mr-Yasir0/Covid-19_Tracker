import { useState } from "react";
import "./App.css";
import { globleData } from "./Components/Api";
import Cards from "./Components/Cards/Cards";
import Charts from "./Components/Chart/Charts";
import CountrySearch from "./Components/CountrySearch/CountrySearch";

function App() {
  const [country, setCountry] = useState();
  const handleChange = async (country) => {
    const fetchData = await globleData(country);
    console.log("handlechange", country);
    console.log(fetchData);
  };

  return (
    <>
      <div className="container">
        <Cards />
        <Charts />
        <CountrySearch handleChange={handleChange} />
      </div>
    </>
  );
}

export default App;
