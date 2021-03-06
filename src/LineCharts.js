import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

const LineCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("Data failed FETCH", error);
      });
  };
  var config = {
    data: data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    xAxis: { type: "time" },
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return "".concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return "".concat(s, ",");
          });
        },
      },
    },
  };
  return <Line {...config} />;
};

export default LineCharts;
