import React from "react";

const InputRange = ({ className, value, set, min, max }) => {
  return (
    <>
      <div className={className}>
        <p className="text-xl font-bold text-right w-4">{value}</p>
        <input
          className="ml-5 z-10"
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => {
            set(parseFloat(e.target.value) || 0);
          }}
        />
      </div>
    </>
  );
};

export default InputRange;
