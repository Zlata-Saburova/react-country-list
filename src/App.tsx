import React from "react";
import countryData from "./country-data.json";
import { ICountry } from "./types";
import { CountryList } from "./components/CountryList";

const App = () => {
  const countries: ICountry[] = countryData.map((country) => ({
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
    flag: country.flags.svg,
    area: country.area,
    region: country.region,
  }));

  return (
    <div className="container">
      <h1 className="mb-3">Country List</h1>
      <CountryList countries={countries} />
    </div>
  );
};

export default App;
