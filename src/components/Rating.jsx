import React, { useState } from "react";

const Rating = ({ val = 0 }) => {
  const [rate, setRate] = useState(val);
  return (
    <div>
      {[...Array(5)].map((_, ind) => (
        <span key={ind} style={{ color: ind < rate ? "orange" : "" }}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
