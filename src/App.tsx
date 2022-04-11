import React from "react";
import countryData from "./country-data.json";
import { ICountry } from "./types";

const App = () => {
  const countries: ICountry[] = countryData.map((country) => ({
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
    flag: country.flags.svg,
    area: country.area,
    region: country.region,
  }));
};

export default App;
