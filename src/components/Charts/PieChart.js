import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const chartData = {
    series: [4, 3, 1],
    options: {
      labels: ["Positive", "Negative", "Neutral"],
      colors: ["#2CD9FF", "#582CFF", "#FF6B8A"],
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="pie"
      width="100%"
    />
  );
};

export default PieChart;


