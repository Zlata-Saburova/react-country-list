import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

export const CountryItem = ({
  name,
  flag,
  capital,
  population,
  area,
  region,
}: ICountry) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <img src={`${flag}`} alt="flag" className="col-1 me-3" />
      <span className="fw-bold col-2 text-left">{name} </span>
      <span className="fw-bold col-2 text-left">{capital} </span>
      <span className="fw-bold col-2 text-left">{region}</span>
      <Badge color={Color.Primary} type={"area"} value={area} />
      <Badge color={Color.Secondary} type={"population"} value={population} />
    </li>
  );
};
