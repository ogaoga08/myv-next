"use client";

import React, { useState } from "react";

type RatingProps = {
  star: number;
  size?: number;
  color?: string;
  readOnly?: boolean;
  withLabel?: boolean;
  onChange?: (value: number) => void;
};

const Rating = ({
  star,
  size = 24,
  color = "#f9ce20",
  readOnly = false,
  withLabel = false,
  onChange,
}: RatingProps) => {
  const [hoverValue, setHoverValue] = useState(star);
  const [clickValue, setClickValue] = useState(star);
  const [isHovered, setIsHovered] = useState(false);
  const arr = [1, 2, 3, 4, 5];

  const calcRes = (amount: number, event: any) => {
    const target = event.target;
    const rect = target.getBoundingClientRect();
    const clickX = event.pageX;
    const positionX = rect.left + window.pageXOffset;
    const x = clickX - positionX;
    const half = rect.width / 2;
    let res = amount;
    if (x < half) {
      res = amount - 1;
    }
    return res;
  };

  const handleOnChange = (amount: number, event: any) => {
    const res = calcRes(amount, event);
    setClickValue(res);
    setHoverValue(res);
    if (onChange) {
      onChange(res);
    }
  };

  const handleOnHover = (amount: number, event: any) => {
    setIsHovered(true);
    const res = calcRes(amount, event);
    setHoverValue(res);
  };

  return (
    <div className="-m-2 flex items-center gap-2">
      <div
        className="relative inline-block select-none items-center"
        style={{
          cursor: readOnly ? "auto" : "pointer",
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div
          className="flex overflow-hidden whitespace-nowrap text-[#e6e6e6]"
          style={{
            fontSize: `${size}px`,
          }}
        >
          {arr.map((num: number) => {
            return (
              <span
                key={`star-${num}`}
                className="p-0.5"
                onMouseMove={readOnly ? () => {} : (e) => handleOnHover(num, e)}
                onClick={readOnly ? () => {} : (e) => handleOnChange(num, e)}
              >
                ☆
              </span>
            );
          })}
        </div>
        <div
          className="absolute left-0 top-0 flex overflow-hidden whitespace-nowrap"
          style={{
            color: color,
            fontSize: `${size}px`,
            width: isHovered
              ? `${hoverValue * 2 * 10}%`
              : `${clickValue * 2 * 10}%`,
            pointerEvents: "none",
          }}
        >
          {arr.map((num: number) => {
            return (
              <span key={`star-active-${num}`} className="p-0.5">
                ★
              </span>
            );
          })}
        </div>
      </div>
      {withLabel ? (
        <span className="font-bold" style={{ fontSize: `${size * 0.65}px` }}>
          {clickValue}
        </span>
      ) : null}
    </div>
  );
};

export default Rating;
