import React from "react";
import ReactDOM from "react-dom";
import { Chart, Line, Point, Tooltip, Legend } from "bizcharts";

// 数据源 data source
const data = [
  {
    month: "Jan",
    city: "Tokyo",
    temperature: 7,
  },
  {
    month: "Jan",
    city: "London",
    temperature: 3.9,
  },
  {
    month: "Feb",
    city: "Tokyo",
    temperature: 6.9,
  },
  {
    month: "Feb",
    city: "London",
    temperature: 4.2,
  },
  {
    month: "Mar",
    city: "Tokyo",
    temperature: 9.5,
  },
  {
    month: "Mar",
    city: "London",
    temperature: 5.7,
  },
  {
    month: "Apr",
    city: "Tokyo",
    temperature: 14.5,
  },
  {
    month: "Apr",
    city: "London",
    temperature: 8.5,
  },
  {
    month: "May",
    city: "Tokyo",
    temperature: 18.4,
  },
  {
    month: "May",
    city: "London",
    temperature: 11.9,
  },
  {
    month: "Jun",
    city: "Tokyo",
    temperature: 21.5,
  },
  {
    month: "Jun",
    city: "London",
    temperature: 15.2,
  },
  {
    month: "Jul",
    city: "Tokyo",
    temperature: 25.2,
  },
  {
    month: "Jul",
    city: "London",
    temperature: 17,
  },
  {
    month: "Aug",
    city: "Tokyo",
    temperature: 26.5,
  },
  {
    month: "Aug",
    city: "London",
    temperature: 16.6,
  },
];

const scale = {
  temperature: { min: 0 },
  city: {
    formatter: (v) => {
      return {
        London: "2018 Report",
        Tokyo: "2019 Report",
      }[v];
    },
  },
};

function Demo() {
  return (
    <Chart
      scale={scale}
      padding={[30, 20, 60, 40]}
      autoFit
      height={320}
      data={data}
      interactions={["element-active"]}
    >
      <Point position='month*temperature' color='city' shape='circle' />
      <Line
        shape='smooth'
        position='month*temperature'
        color='city'
        label='temperature'
      />
      <Tooltip shared showCrosshairs />
      <Legend
        background={{
          padding: [5, 100, 5, 36],
          style: {
            fill: "#eaeaea",
            stroke: "#fff",
          },
        }}
      />
    </Chart>
  );
}

export default Demo;
