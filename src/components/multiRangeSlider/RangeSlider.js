import React, { useState } from "react";
import "./RangeSlider.css";
import MultiRangeSlider from "multi-range-slider-react";

function RangeSlider() {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div>
      <div>
        <p>Price</p>
        <MultiRangeSlider
          min={0}
          max={100}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          barInnerColor="rgb(19, 209, 187)"
          onInput={(e) => {
            handleInput(e);
          }}
          ruler={false}
        />
        <div className="flex justify-between">
          <p>min: {minValue}</p>
          <p>max: {maxValue}</p>
        </div>
      </div>
    </div>
  );
}
export default RangeSlider;
