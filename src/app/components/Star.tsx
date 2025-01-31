import { useState } from "react";
import ReactStarsRating from "react-awesome-stars-rating";

export const Star = () => {
  const onChange = (value) => {
    setValue(value);
  };

  const [value, setValue] = useState(3);

  return (
    <div className="flex items-center">
      <ReactStarsRating onChange={onChange} value={value} className="flex" />
    </div>
  );
};
