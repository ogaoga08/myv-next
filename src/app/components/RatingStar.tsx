import React from "react";

interface RatingStarProps {
  props: number;
}

const RatingStar = ({ props }: RatingStarProps) => {
  const fullStar = "★";
  const emptyStar = "☆";
  const rating = fullStar.repeat(props) + emptyStar.repeat(5 - props);

  return <span>{rating}</span>;
};

export default RatingStar;
