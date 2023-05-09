




import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const pieChartData = {
    series: [44, 55, 13],
    labels: ["Positive", "Negative", "Neutral"],
  };

  const pieChartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: "Plus Jakarta Display",
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Plus Jakarta Display",
      fontSize: "12px",
      itemMargin: {
        vertical: 5,
      },
    },
    labels: ["Positive", "Negative", "Neutral"],
    colors: ["#2CD9FF", "#582CFF", "#FF6B8A"],
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
  };

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <h2 style={{ color: 'white', fontWeight: 'bold', marginLeft: '20px' }}>Sentiment Analysis</h2>
    <Chart
      options={pieChartOptions}
      series={pieChartData.series}
      type="pie"
      width="100%"
      height="350"
    />
       </div>
  );
};

export default PieChart;

