import { BadgeLable, Color } from "../types";

interface IBadge {
  color: Color;
  type: BadgeLable;
  value: number;
}

export const Badge = ({ color, type, value }: IBadge) => {
  return (
    <span className={`modal-lg badge w-25 mx-3 bg-${color}`}>
      {type}: {value}
    </span>
  );
};
