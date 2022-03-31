import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const ReactApexChart = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];

    const data = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: empAge,
        },
      },
      series: [
        {
          name: "series-1",
          data: empSal,
        },
      ],
    };

    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);

  return <Chart {...chartData} type="bar" width="100%" height="400" />;
};

export default ReactApexChart;
