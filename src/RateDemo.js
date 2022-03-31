import React, { useState } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

function RateDemo() {
  const [value, setValue] = useState(3);

  const handleChange = () => {
    setValue(value);
  };

  const { v } = value;

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={v} />
      {value ? <span className='ant-rate-text'>{desc[value - 1]}</span> : ""}
    </span>
  );
}

export default RateDemo;
